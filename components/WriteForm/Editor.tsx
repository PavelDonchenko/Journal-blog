import React from 'react';
import EditorJS from '@editorjs/editorjs';

const Editor = () => {
  React.useEffect(() => {
    const editor = new EditorJS({
      holder: 'editor',
      placeholder: 'Enter text'
    });

    return () => {
      editor.isReady
        .then(() => {
          editor.destroy();
        })
        .catch((e) => console.error('ERROR EDITOR CLEAN', e));
    };
  }, []);
  return <div id="editor" />;
};

export default Editor;
