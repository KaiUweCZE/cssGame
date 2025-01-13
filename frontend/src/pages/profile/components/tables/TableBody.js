import { MoreHorizontal, Trash2, CheckCircle2, Clock } from "lucide-react";
import React, { useState } from "react";
import EditLevelModal from "../modals/EditLevelModal";
import DeleteLevelModal from "../modals/DeleteLevelModal";

const TableBody = ({
  levels,
  currentPage,
  onDelete,
  isPlayedLevels = false,
  completedLevels = [],
}) => {
  const [deleteModal, setDeleteModal] = useState({
    isOpen: false,
    level: null,
  });
  const [editModal, setEditModal] = useState({ isOpen: false, level: null });
  const minorClass = isPlayedLevels && "played-levels-item";

  const isLevelCompleted = (levelId) => {
    return completedLevels.includes(levelId);
  };

  return (
    <div className="table-body">
      <ul>
        {levels.map((level, index) => (
          <li key={level.id} className={`table-list-item ${minorClass}`}>
            <span>
              {index + 1 + (currentPage - 1) * 5}. {level.name}
            </span>
            {isPlayedLevels ? (
              <>
                <span>{level.author}</span>
                <span className="status-icon">
                  {isLevelCompleted(level.id) ? (
                    <div className="flex">
                      {" "}
                      <CheckCircle2 className="completed" height={20} />{" "}
                      <span>Completed</span>
                    </div>
                  ) : (
                    <div className="flex">
                      {" "}
                      <Clock className="in-progress" height={20} />{" "}
                      <span>In progress</span>
                    </div>
                  )}
                </span>
              </>
            ) : (
              <>
                <span>{level.likeCount}</span>
                <span>
                  {level.finish}/{level.usersCount}
                </span>
                <div className="buttons">
                  <button
                    className="more-button"
                    onClick={() => {
                      setEditModal(() => {
                        return { isOpen: true, level: level };
                      });
                      console.log("About to edit level:", level);
                    }}
                  >
                    <MoreHorizontal height={16} />
                  </button>
                  <button
                    className="trash-button"
                    onClick={() => setDeleteModal({ isOpen: true, level })}
                  >
                    <Trash2 height={16} />
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>

      {deleteModal.isOpen && (
        <DeleteLevelModal
          onClose={() => setDeleteModal({ isOpen: false, level: null })}
          level={deleteModal.level}
          onDelete={onDelete}
        />
      )}
      {editModal.isOpen && (
        <EditLevelModal
          onClose={() => setEditModal({ isOpen: false, level: null })}
          level={editModal.level}
        />
      )}
    </div>
  );
};

export default TableBody;
