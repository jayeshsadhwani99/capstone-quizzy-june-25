import { EyeIcon } from "lucide-react";
import { TrashIcon } from "lucide-react";
import { EditIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const useTemplatesData = () => {
  const navigate = useNavigate();

  const rows = [];

  const actions = [
    {
      icon: <EyeIcon size={20} className="text-green-500" />,
      onClick: (row) => {
        navigate(`/teacher/templates/${row.id}`);
      },
    },
    {
      icon: <EditIcon size={20} className="text-blue-500" />,
      onClick: () => {},
    },
    {
      icon: <TrashIcon size={20} className="text-red-500" />,
      onClick: () => {},
    },
  ];

  return {
    rows,
    actions,
  };
};
