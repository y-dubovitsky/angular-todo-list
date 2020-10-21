/**
 * Basic interface for all DAO interfaces/
 */
export interface GeneralDao<T> {

  add(T): T;

  get(id: number): T;

  delete(id: number): void;

  update(T): T;

  getAll(): T[];
}
