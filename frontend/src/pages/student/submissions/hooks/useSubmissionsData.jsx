import { useNavigate } from "react-router-dom";
import { EyeIcon, FilePenLine } from "lucide-react";
import { useGetAllSubmissionsQuery } from "../../../../store/features/submissions/api";
import { AssesmentStatusEnum } from "../../../../../../backend/types";

export const useSubmissionsData = () => {
  const navigate = useNavigate();
  const { data = [] } = useGetAllSubmissionsQuery(undefined, {
    pollingInterval: 1000 * 60,
    refetchOnFocus: true,
  });

  const rows = data.map((submission) => ({
    ...submission,
    assessment: submission.assesmentId?.title,
  }));

  const actions = [
    {
      icon: (row) =>
        row.status === AssesmentStatusEnum.COMPLETED ? (
          <EyeIcon size={20} className="text-blue-500" />
        ) : (
          <FilePenLine size={20} className="text-green-500" />
        ),
      onClick: (row) => {
        if (row.status === AssesmentStatusEnum.COMPLETED) {
          navigate(`/student/submissions/${row._id}`);
        } else {
          navigate(
            `/student/assesments/${row.assesmentId._id}?submissionId=${row._id}`,
          );
        }
      },
    },
  ];

  return {
    rows,
    actions,
  };
};
