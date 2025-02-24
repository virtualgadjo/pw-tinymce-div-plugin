/**
 * “wdiv” (wrap selected content with a div) plugin
 * for TinyMCE 6 in processwire (what eles?)
 */

tinymce.PluginManager.add('wdiv', (editor, url) => {
	const openDialog = () => editor.windowManager.open({
		title: 'wdiv plugin',
		body: {
			type: 'panel',
			items: [
				{
					type: 'input',
					name: 'ziclass',
					label: 'css class to use'
				}
			]
		},
		buttons: [
			{
				type: 'cancel',
				text: 'Close'
			},
			{
				type: 'submit',
				text: 'Save',
				buttonType: 'primary'
			}
		],
		onSubmit: (api) => {
			const data = api.getData();
			/* wrap the selected text with a div having a class */
			let cnt = editor.selection.getContent({format: 'html'});
			if(data.ziclass != '') {
				editor.insertContent(`<div class="${data.ziclass}">${cnt}</div>`);
			}
			else {
				editor.insertContent(`<div class="box">${cnt}</div>`);
			}
			api.close();
		}
	});
	editor.ui.registry.addIcon('divcode', '<svg height="24" width="24" viewBox="0 0 24 24"><path d="M12.89,3L14.85,3.4L11.11,21L9.15,20.6L12.89,3M19.59,12L16,8.41V5.58L22.42,12L16,18.41V15.58L19.59,12M1.58,12L8,5.58V8.41L4.41,12L8,15.58V18.41L1.58,12Z" /></svg>');
	editor.ui.registry.addButton('wdiv', {
		text: 'wdiv',
		icon: 'divcode',
		tooltip: "wrap with a div",
		onAction: () => {
			/* Open window */
			openDialog();
		}
	});
	// metadata
	return {
		getMetadata: () => ({ name: 'Wdiv' })
	};
});