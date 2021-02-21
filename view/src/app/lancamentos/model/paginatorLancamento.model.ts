import { Lancamento } from "./lancamento.model";

export class PaginatorLancamento {
  content?: Lancamento[];
  first?: boolean;
  last?: boolean;
  number?: number;
  numberOfElements?: number;
  size?: number;
  sort?: any;
  totalElements?: number;
  totalPages?: number;

}
