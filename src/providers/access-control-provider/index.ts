import { AccessControlProvider } from "@refinedev/core";

export const accessControlProvider: AccessControlProvider = {
  can: async () => {
    return { can: true, reason: "You are god, you just can do anything" };
  },
};
