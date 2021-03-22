import { ELEMENT_DEFAULT } from '@udecode/slate-plugins-common';
import { getPluginType } from '@udecode/slate-plugins-core';
import { Editor } from 'slate';
import { ELEMENT_TD } from '../defaults';
import { TablePluginOptions } from '../types';

export const getEmptyCellNode = (
  editor: Editor,
  { header }: TablePluginOptions
) => {
  return {
    type: header
      ? getPluginType(editor, ELEMENT_TD)
      : getPluginType(editor, ELEMENT_TD),
    children: [
      {
        type: getPluginType(editor, ELEMENT_DEFAULT),
        children: [{ text: '' }],
      },
    ],
  };
};