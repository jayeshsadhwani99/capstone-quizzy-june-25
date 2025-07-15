import { useNavigate } from "react-router-dom";
import { useGetAllAssesmentsQuery } from "../../../../store/features/assesments/api";
import { EyeIcon } from "lucide-react";

export const useAssesmentsData = () => {
  const navigate = useNavigate();
  const { data = [] } = useGetAllAssesmentsQuery();

  const rows = data.map((assessment) => ({
    ...assessment,
  }));

  const actions = [
    {
      icon: <EyeIcon size={20} className="text-blue-500" />,
      onClick: (row) => {
        navigate(`/student/assesments/${row._id}`);
      },
    },
  ];

  return {
    rows,
    actions,
  };
};
