import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  groupingDoTheThing,
  groupingCommit,
  groupingGetRun,
  groupingGetLatestRun,
  groupingMatchHistoryCheck,
} from '../utils/api';

/**
 * Mutation that kicks off the "Do The Thing" grouping engine for a dinner.
 * On success the latest-run query for the dinner is invalidated so callers
 * pick up the freshly stored preview run on their next render.
 */
export const useDoTheThing = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ dinner_id, seed } = {}) => {
      const response = await groupingDoTheThing({ dinner_id, seed });
      if (!response?.success) {
        throw new Error(response?.message || 'Failed to run grouping engine');
      }
      return response.data;
    },
    onSuccess: (_data, variables) => {
      if (variables?.dinner_id) {
        queryClient.invalidateQueries({
          queryKey: ['groupingLatestRun', variables.dinner_id],
        });
      }
    },
  });
};

/**
 * Mutation that commits a preview run — optionally with a possibly-mutated
 * groups_override payload. On success we invalidate everything a committed
 * run would visibly change: the live groups list, the requested-attendees
 * view, and any dinner detail screens.
 */
export const useCommitRun = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ run_id, groups_override } = {}) => {
      const response = await groupingCommit({ run_id, groups_override });
      if (!response?.success) {
        throw new Error(response?.message || 'Failed to commit grouping run');
      }
      return response.data;
    },
    onSuccess: (_data, variables) => {
      // Live group list consumed by GroupAttendeesPage drag-drop flow.
      queryClient.invalidateQueries({ queryKey: ['groups'] });
      // Dinner-level queries (detail + requested dinners list).
      queryClient.invalidateQueries({ queryKey: ['dinnerDetail'] });
      queryClient.invalidateQueries({ queryKey: ['requestedDinners'] });
      // Refresh the run's own cached entries too.
      if (variables?.run_id) {
        queryClient.invalidateQueries({
          queryKey: ['groupingRun', variables.run_id],
        });
      }
      queryClient.invalidateQueries({ queryKey: ['groupingLatestRun'] });
    },
  });
};

/**
 * Fetch a single grouping run by id.
 */
export const useGroupingRun = (runId, options = {}) => {
  return useQuery({
    queryKey: ['groupingRun', runId],
    queryFn: async () => {
      const response = await groupingGetRun(runId);
      if (!response?.success) {
        throw new Error(response?.message || 'Failed to fetch grouping run');
      }
      return response.data;
    },
    enabled: !!runId && (options.enabled ?? true),
    ...options,
  });
};

/**
 * Fetch the latest grouping run for a given dinner. Used by the admin
 * preview screen to rehydrate a previously-created preview.
 */
export const useLatestGroupingRun = (dinnerId, options = {}) => {
  return useQuery({
    queryKey: ['groupingLatestRun', dinnerId],
    queryFn: async () => {
      const response = await groupingGetLatestRun(dinnerId);
      if (!response?.success) {
        throw new Error(response?.message || 'Failed to fetch latest run');
      }
      return response.data;
    },
    enabled: !!dinnerId && (options.enabled ?? true),
    ...options,
  });
};

/**
 * Per-drop match-history check. Exposed as a useMutation so the call shows
 * up in the react-query devtools and so callers can await its result or
 * chain off mutate/mutateAsync without manual useState bookkeeping.
 *
 * `group_id` supports the backend's preview syntax:
 *   `preview:<run_id>:<group_index>`
 * so drops against a not-yet-committed preview group are checked against
 * the proposed membership rather than a materialised group.
 */
export const useMatchHistoryCheck = () => {
  return useMutation({
    mutationFn: async ({ group_id, user_id } = {}) => {
      const response = await groupingMatchHistoryCheck({ group_id, user_id });
      if (!response?.success) {
        throw new Error(
          response?.message || 'Failed to check match history',
        );
      }
      return response.data;
    },
  });
};
