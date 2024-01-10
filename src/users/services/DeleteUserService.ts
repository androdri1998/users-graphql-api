export interface IDeleteUserService {
  execute(id: string): Promise<Boolean>;
}
