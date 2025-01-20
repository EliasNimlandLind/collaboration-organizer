import React from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import { StarterKit } from '@tiptap/starter-kit';
import { History } from '@tiptap/extension-history'; // Correct extension for Undo/Redo
import { TextAlign } from '@tiptap/extension-text-align';
import { Heading } from '@tiptap/extension-heading';
import Tiptap from '../textEditor/TipTap';

const TextEditor = () => {
	return <Tiptap />;
};

export default TextEditor;
