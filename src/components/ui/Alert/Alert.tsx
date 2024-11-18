import "./index.scss";
import { X } from 'lucide-react';
import { ReactNode } from "react";
import { AlertTypes } from "../../../types";

interface IProps {
  type: AlertTypes;
  icon: ReactNode;
  title: string;
  description?: string;
  children?: ReactNode;
}


const Alert = ({type, icon, title, description, children}: IProps) => {
  return (
    <div>
      <div className={type}>
        <div className="alert-header">
          <div className="title">
            {icon}
            <h4>{title}</h4>
          </div>
          <span>
            <X />
          </span>
        </div>
        {children ? children : <p>{description}</p>}
      </div>
    </div>

  )
}

export default Alert;