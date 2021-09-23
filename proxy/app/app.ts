import PessoaProxy from "./PessoaProxy.js";

const individuo = new PessoaProxy();

individuo.adicionarPessoaProxy('aaa', 123, 654123);
individuo.adicionarPessoaProxy('bbb', 124, 654123);
individuo.adicionarPessoaProxy('ccc', 125, 654123);

//individuo.listarPessoasProxy(654123);
//individuo.deletarPessoaProxy(124, 654123);
//individuo.consultarPessoaProxy(123, 654123);
//individuo.listarPessoasProxy(654123);