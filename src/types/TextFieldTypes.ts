import { type SlotComponentProps, type InputRootSlotPropsOverrides, type InputOwnerState, type InputInputSlotPropsOverrides } from "@mui/base";

export type slotPropsType = {
    root?: SlotComponentProps<
        "div",
        InputRootSlotPropsOverrides,
        InputOwnerState
    >;
    input?: SlotComponentProps<
        "input",
        InputInputSlotPropsOverrides,
        InputOwnerState
    >;
};