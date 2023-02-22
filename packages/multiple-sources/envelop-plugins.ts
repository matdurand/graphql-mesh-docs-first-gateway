import { useMaskedErrors } from "@envelop/core";

const plugins = [
  useMaskedErrors({
    errorMessage: "Something went wrong.",
  }),
];

export default plugins;
