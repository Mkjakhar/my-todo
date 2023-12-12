import { DeleteIcon, TickIcon } from "./Icons";

interface TodoData {
  para: string;
  deleteIcon: React.ReactNode;
  tickIcon: React.ReactNode;
  styleList?: string;
}

export const todoData: TodoData[] = [
  {
    para: "Todo one",
    deleteIcon: <DeleteIcon />,
    tickIcon: <TickIcon />,
  },
  {
    para: "Todo one",
    deleteIcon: <DeleteIcon />,
    tickIcon: <TickIcon />,
    styleList: "checked_list",
  },
  {
    para: "Todo one",
    deleteIcon: <DeleteIcon />,
    tickIcon: <TickIcon />,
  },
  {
    para: "Todo one",
    deleteIcon: <DeleteIcon />,
    tickIcon: <TickIcon />,
  },
  {
    para: "Todo one",
    deleteIcon: <DeleteIcon />,
    tickIcon: <TickIcon />,
  },
  {
    para: "Todo one",
    deleteIcon: <DeleteIcon />,
    tickIcon: <TickIcon />,
  },
  {
    para: "Todo one",
    deleteIcon: <DeleteIcon />,
    tickIcon: <TickIcon />,
  },
];
