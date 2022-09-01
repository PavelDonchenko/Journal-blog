import React from 'react';
import { Button, Input } from '@material-ui/core';
import styles from './AddCommentForm.module.scss';

const AddCommentForm: React.FC = () => {
  const [inputHeight, setInputHeight] = React.useState(1);
  const [inputValue, setInputValue] = React.useState('');
  const inputRef = React.useRef(null);

  const handleSendComment = () => {
    setInputHeight(1);
    setInputValue('');
  };

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const _event = event as MouseEvent & {
        path: Node[];
      };
      if (inputRef.current && !_event.path.includes(inputRef.current)) {
        setInputHeight(1);
      }
    };
    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.inputWrap}>
      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        ref={inputRef}
        onFocus={() => setInputHeight(5)}
        minRows={inputHeight}
        classes={{ root: styles.inputFieldRoot }}
        placeholder="Enter a comment"
        fullWidth
        multiline
      />
      {inputHeight > 1 && (
        <Button
          onClick={() => handleSendComment()}
          className={styles.btn}
          style={{ backgroundColor: `${inputValue}` ? '#4683d9' : '#4683d987' }}
          variant="contained"
          color="primary"
        >
          Опубликовать
        </Button>
      )}
    </div>
  );
};

export default AddCommentForm;
