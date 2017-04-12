type MemberById = {
  id?: number,
  name: string,
  title: string
};

// This is the model of our module state
export type State = {
  members: number[],
  membersById: Array<MemberById>
};
