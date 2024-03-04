import { FC, HTMLProps } from "react";
import { IconBaseProps, IconType } from "react-icons";

interface IconProps extends IconBaseProps {
  icon: IconType;
}

const CustomIcon: FC<IconProps & HTMLProps<SVGElement>> = ({
  icon: Icon,
  size = 24,
  ...props
}) => <Icon size={size} {...props} />;

export default CustomIcon;
