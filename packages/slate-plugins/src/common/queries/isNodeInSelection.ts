import { getSelectionNodesByType } from 'common/queries/getSelectionNodesByType';
import { Editor } from 'slate';

/**
 * Is there a node with a type included in `types` in the selection (from root to leaf).
 */
export const isNodeInSelection = (
  editor: Editor,
  types: string[] | string,
  options: {
    mode?: 'highest' | 'lowest' | 'all';
    universal?: boolean;
    reverse?: boolean;
    voids?: boolean;
  } = {}
) => {
  const [match] = getSelectionNodesByType(editor, types, options);
  return !!match;
};
