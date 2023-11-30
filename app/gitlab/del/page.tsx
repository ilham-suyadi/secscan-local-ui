import React from 'react';
import { GoTrash } from 'react-icons/go';

const GoTrashIcon: React.FC<{ onDelete: () => void }> = ({ onDelete }) => (
        <span
          className="absolute right-4 top-[30%] text-lg text-gray-600 cursor-pointer"
          onClick={onDelete}
        >
          <GoTrash />
        </span>
      );

export default GoTrashIcon