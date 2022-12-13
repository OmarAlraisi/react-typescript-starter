export const generateActionType = (
  actionType: string,
  actionName: string
): string => {
  actionType = actionType.replaceAll(" ", "_");
  actionType = actionType.toUpperCase();

  actionName = actionName.replaceAll(" ", "_");
  actionName = actionName.toUpperCase();

  return `${actionType}--${actionName}`;
};
