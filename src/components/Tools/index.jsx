import React, { useState } from 'react';

//Components
import Filters from '../Filters';
import CreateModal from '../Modals/CreateModal';

//UI
import { Button } from '../UI/Button';

//Styles
import "./Tools.scss"

const Tools = () => {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!isOpen)
  }

  return (
    <div className='tools'>
        <div className='tools__btn'>
          <Button onClick={handleClick}>
            Cоздать колонку
          </Button>
        </div>
        <Filters />
        <CreateModal isOpen={isOpen} handleClose={handleClick} />
    </div>
  );
}

export default Tools;