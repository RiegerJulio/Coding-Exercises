import { Negociacao } from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';
import { NegociacoesView } from '../views/negociacoesView.js';
import { MensagemView } from '../views/mensagemView.js';
import { DiasDaSemana } from '../enums/diasDaSemana.js';

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new MensagemView('#mensagemView');

    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    }

    public adiciona(): void {
        const negociacao = this.criaNegociacao();
        if (negociacao.data.getDay() > DiasDaSemana.DOMINGO && negociacao.data.getDay() < DiasDaSemana.SABADO) {
            this.negociacoes.adiciona(negociacao);
            this.limparFormulario();
            this.atualizaView();
        } else {
            this.mensagemView.update('Não é permitida negociações em dias não úteis')
        }
    }

    private criaNegociacao(): Negociacao {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }

    private limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

    private atualizaView(): void {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso!');
    }
}
