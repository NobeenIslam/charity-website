import { imageForMocks } from "../../../../utilities/constants";
import { CartItemProps } from "./CartItem";

const cartItemMock: CartItemProps = {
  projectId: "123",
  image: imageForMocks,
  title: "Project Name",
  summary: "This is the project summary",
  amount: 200,
  quantity: 1,
};

export { cartItemMock };
