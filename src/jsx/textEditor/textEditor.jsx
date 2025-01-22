import { Color } from '@tiptap/extension-color';
import ListItem from '@tiptap/extension-list-item';
import TextStyle from '@tiptap/extension-text-style';
import { EditorProvider, useCurrentEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import '../../css/textEditor.css';

import React, { useContext } from 'react';

import { UserContext } from '../UserContext';

const MenuBar = () => {
	const { editor } = useCurrentEditor();

	if (!editor) {
		return null;
	}

	const username = useContext(UserContext).currentLoggedInUser;

	const saveDocument = () => {
		console.log(username);
		postDocument(username);
	};

	const postDocument = async (author) => {
		const fileName = document.getElementById('input-file-name').value;
		const keywords = document.getElementById('input-keywords').value.split(',');

		const response = await fetch('http://localhost:3000/api/documents', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				fileName: fileName,
				metadata: {
					lastDateSaved: new Date(),
					keywords: [...keywords],
					author: author,
				},
				content: editor.getJSON(),
			}),
		});
	};

	return (
		<div>
			<input
				id='input-file-name'
				placeholder='Enter file name'></input>
			<input
				id='input-keywords'
				placeholder='Enter keywords'></input>
			<div className='button-group'>
				<button onClick={saveDocument}>Save</button>
				<button
					onClick={() => editor.chain().focus().toggleBold().run()}
					disabled={!editor.can().chain().focus().toggleBold().run()}
					className={editor.isActive('bold') ? 'is-active' : ''}>
					Bold
				</button>
				<button
					onClick={() => editor.chain().focus().toggleItalic().run()}
					disabled={!editor.can().chain().focus().toggleItalic().run()}
					className={editor.isActive('italic') ? 'is-active' : ''}>
					Italic
				</button>
				<button
					onClick={() => editor.chain().focus().toggleStrike().run()}
					disabled={!editor.can().chain().focus().toggleStrike().run()}
					className={editor.isActive('strike') ? 'is-active' : ''}>
					Strike
				</button>
				<button
					onClick={() => editor.chain().focus().toggleCode().run()}
					disabled={!editor.can().chain().focus().toggleCode().run()}
					className={editor.isActive('code') ? 'is-active' : ''}>
					Code
				</button>
				<button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
					Clear marks
				</button>
				<button onClick={() => editor.chain().focus().clearNodes().run()}>
					Clear nodes
				</button>
				<button
					onClick={() => editor.chain().focus().setParagraph().run()}
					className={editor.isActive('paragraph') ? 'is-active' : ''}>
					Paragraph
				</button>
				<button
					onClick={() =>
						editor.chain().focus().toggleHeading({ level: 1 }).run()
					}
					className={
						editor.isActive('heading', { level: 1 }) ? 'is-active' : ''
					}>
					H1
				</button>
				<button
					onClick={() =>
						editor.chain().focus().toggleHeading({ level: 2 }).run()
					}
					className={
						editor.isActive('heading', { level: 2 }) ? 'is-active' : ''
					}>
					H2
				</button>
				<button
					onClick={() =>
						editor.chain().focus().toggleHeading({ level: 3 }).run()
					}
					className={
						editor.isActive('heading', { level: 3 }) ? 'is-active' : ''
					}>
					H3
				</button>
				<button
					onClick={() =>
						editor.chain().focus().toggleHeading({ level: 4 }).run()
					}
					className={
						editor.isActive('heading', { level: 4 }) ? 'is-active' : ''
					}>
					H4
				</button>
				<button
					onClick={() =>
						editor.chain().focus().toggleHeading({ level: 5 }).run()
					}
					className={
						editor.isActive('heading', { level: 5 }) ? 'is-active' : ''
					}>
					H5
				</button>
				<button
					onClick={() =>
						editor.chain().focus().toggleHeading({ level: 6 }).run()
					}
					className={
						editor.isActive('heading', { level: 6 }) ? 'is-active' : ''
					}>
					H6
				</button>
				<button
					onClick={() => editor.chain().focus().toggleBulletList().run()}
					className={editor.isActive('bulletList') ? 'is-active' : ''}>
					Bullet list
				</button>
				<button
					onClick={() => editor.chain().focus().toggleOrderedList().run()}
					className={editor.isActive('orderedList') ? 'is-active' : ''}>
					Ordered list
				</button>
				<button
					onClick={() => editor.chain().focus().toggleCodeBlock().run()}
					className={editor.isActive('codeBlock') ? 'is-active' : ''}>
					Code block
				</button>
				<button
					onClick={() => editor.chain().focus().toggleBlockquote().run()}
					className={editor.isActive('blockquote') ? 'is-active' : ''}>
					Blockquote
				</button>
				<button
					onClick={() => editor.chain().focus().setHorizontalRule().run()}>
					Horizontal rule
				</button>
				<button onClick={() => editor.chain().focus().setHardBreak().run()}>
					Hard break
				</button>
				<button
					onClick={() => editor.chain().focus().undo().run()}
					disabled={!editor.can().chain().focus().undo().run()}>
					Undo
				</button>
				<button
					onClick={() => editor.chain().focus().redo().run()}
					disabled={!editor.can().chain().focus().redo().run()}>
					Redo
				</button>
				<button
					onClick={() => editor.chain().focus().setColor('#958DF1').run()}
					className={
						editor.isActive('textStyle', { color: '#958DF1' })
							? 'is-active'
							: ''
					}>
					Purple highlight
				</button>
			</div>
		</div>
	);
};

const extensions = [
	Color.configure({ types: [TextStyle.name, ListItem.name] }),
	TextStyle.configure({ types: [ListItem.name] }),
	StarterKit.configure({
		bulletList: {
			keepMarks: true,
			keepAttributes: false,
		},
		orderedList: {
			keepMarks: true,
			keepAttributes: false,
		},
	}),
];

const content = `

`;

export default () => {
	return (
		<EditorProvider
			slotBefore={<MenuBar />}
			extensions={extensions}
			content={content}></EditorProvider>
	);
};
