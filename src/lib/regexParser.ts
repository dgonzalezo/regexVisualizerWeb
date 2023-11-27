// Generated from regexParser.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import regexParserListener from "./regexParserListener.js";
import regexParserVisitor from "./regexParserVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class regexParser extends Parser {
	public static readonly LPAREN = 1;
	public static readonly RPAREN = 2;
	public static readonly PIPE = 3;
	public static readonly PLUS = 4;
	public static readonly QUESTION = 5;
	public static readonly STAR = 6;
	public static readonly WildcardEsc = 7;
	public static readonly Char = 8;
	public static readonly StartQuantity = 9;
	public static readonly SingleCharEsc = 10;
	public static readonly MultiCharEsc = 11;
	public static readonly CatEsc = 12;
	public static readonly ComplEsc = 13;
	public static readonly NegCharGroup = 14;
	public static readonly PosCharGroup = 15;
	public static readonly EndQuantity = 16;
	public static readonly QuantExact = 17;
	public static readonly COMMA = 18;
	public static readonly EndCategory = 19;
	public static readonly IsCategory = 20;
	public static readonly Letters = 21;
	public static readonly Marks = 22;
	public static readonly Numbers = 23;
	public static readonly Punctuation = 24;
	public static readonly Separators = 25;
	public static readonly Symbols = 26;
	public static readonly Others = 27;
	public static readonly IsBlock = 28;
	public static readonly NestedSingleCharEsc = 29;
	public static readonly NestedMultiCharEsc = 30;
	public static readonly NestedCatEsc = 31;
	public static readonly NestedComplEsc = 32;
	public static readonly NestedNegCharGroup = 33;
	public static readonly NestedPosCharGroup = 34;
	public static readonly EndCharGroup = 35;
	public static readonly DASH = 36;
	public static readonly XmlChar = 37;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_root = 0;
	public static readonly RULE_regExp = 1;
	public static readonly RULE_branch = 2;
	public static readonly RULE_piece = 3;
	public static readonly RULE_quantifier = 4;
	public static readonly RULE_quantity = 5;
	public static readonly RULE_quantRange = 6;
	public static readonly RULE_quantMin = 7;
	public static readonly RULE_atom = 8;
	public static readonly RULE_charClass = 9;
	public static readonly RULE_charClassExpr = 10;
	public static readonly RULE_charGroup = 11;
	public static readonly RULE_posCharGroup = 12;
	public static readonly RULE_charRange = 13;
	public static readonly RULE_seRange = 14;
	public static readonly RULE_charOrEsc = 15;
	public static readonly RULE_charClassEsc = 16;
	public static readonly RULE_catEsc = 17;
	public static readonly RULE_complEsc = 18;
	public static readonly RULE_charProp = 19;
	public static readonly literalNames: (string | null)[] = [ null, "'('", 
                                                            "')'", "'|'", 
                                                            "'+'", "'?'", 
                                                            "'*'", "'.'", 
                                                            null, "'{'", 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            "','", null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, "']'", 
                                                            "'-'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "LPAREN", 
                                                             "RPAREN", "PIPE", 
                                                             "PLUS", "QUESTION", 
                                                             "STAR", "WildcardEsc", 
                                                             "Char", "StartQuantity", 
                                                             "SingleCharEsc", 
                                                             "MultiCharEsc", 
                                                             "CatEsc", "ComplEsc", 
                                                             "NegCharGroup", 
                                                             "PosCharGroup", 
                                                             "EndQuantity", 
                                                             "QuantExact", 
                                                             "COMMA", "EndCategory", 
                                                             "IsCategory", 
                                                             "Letters", 
                                                             "Marks", "Numbers", 
                                                             "Punctuation", 
                                                             "Separators", 
                                                             "Symbols", 
                                                             "Others", "IsBlock", 
                                                             "NestedSingleCharEsc", 
                                                             "NestedMultiCharEsc", 
                                                             "NestedCatEsc", 
                                                             "NestedComplEsc", 
                                                             "NestedNegCharGroup", 
                                                             "NestedPosCharGroup", 
                                                             "EndCharGroup", 
                                                             "DASH", "XmlChar" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"root", "regExp", "branch", "piece", "quantifier", "quantity", "quantRange", 
		"quantMin", "atom", "charClass", "charClassExpr", "charGroup", "posCharGroup", 
		"charRange", "seRange", "charOrEsc", "charClassEsc", "catEsc", "complEsc", 
		"charProp",
	];
	public get grammarFileName(): string { return "regexParser.g4"; }
	public get literalNames(): (string | null)[] { return regexParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return regexParser.symbolicNames; }
	public get ruleNames(): string[] { return regexParser.ruleNames; }
	public get serializedATN(): number[] { return regexParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, regexParser._ATN, regexParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public root(): RootContext {
		let localctx: RootContext = new RootContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, regexParser.RULE_root);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 40;
			this.regExp();
			this.state = 41;
			this.match(regexParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public regExp(): RegExpContext {
		let localctx: RegExpContext = new RegExpContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, regexParser.RULE_regExp);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 43;
			this.branch();
			this.state = 48;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===3) {
				{
				{
				this.state = 44;
				this.match(regexParser.PIPE);
				this.state = 45;
				this.branch();
				}
				}
				this.state = 50;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public branch(): BranchContext {
		let localctx: BranchContext = new BranchContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, regexParser.RULE_branch);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 54;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3758161282) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 7) !== 0)) {
				{
				{
				this.state = 51;
				this.piece();
				}
				}
				this.state = 56;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public piece(): PieceContext {
		let localctx: PieceContext = new PieceContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, regexParser.RULE_piece);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 57;
			this.atom();
			this.state = 59;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 624) !== 0)) {
				{
				this.state = 58;
				this.quantifier();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public quantifier(): QuantifierContext {
		let localctx: QuantifierContext = new QuantifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, regexParser.RULE_quantifier);
		try {
			this.state = 68;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 5:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 61;
				this.match(regexParser.QUESTION);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 62;
				this.match(regexParser.STAR);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 63;
				this.match(regexParser.PLUS);
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 64;
				this.match(regexParser.StartQuantity);
				this.state = 65;
				this.quantity();
				this.state = 66;
				this.match(regexParser.EndQuantity);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public quantity(): QuantityContext {
		let localctx: QuantityContext = new QuantityContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, regexParser.RULE_quantity);
		try {
			this.state = 73;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 70;
				this.quantRange();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 71;
				this.quantMin();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 72;
				this.match(regexParser.QuantExact);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public quantRange(): QuantRangeContext {
		let localctx: QuantRangeContext = new QuantRangeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, regexParser.RULE_quantRange);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 75;
			this.match(regexParser.QuantExact);
			this.state = 76;
			this.match(regexParser.COMMA);
			this.state = 77;
			this.match(regexParser.QuantExact);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public quantMin(): QuantMinContext {
		let localctx: QuantMinContext = new QuantMinContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, regexParser.RULE_quantMin);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 79;
			this.match(regexParser.QuantExact);
			this.state = 80;
			this.match(regexParser.COMMA);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public atom(): AtomContext {
		let localctx: AtomContext = new AtomContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, regexParser.RULE_atom);
		try {
			this.state = 88;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 8:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 82;
				this.match(regexParser.Char);
				}
				break;
			case 7:
			case 10:
			case 11:
			case 12:
			case 13:
			case 14:
			case 15:
			case 29:
			case 30:
			case 31:
			case 32:
			case 33:
			case 34:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 83;
				this.charClass();
				}
				break;
			case 1:
				this.enterOuterAlt(localctx, 3);
				{
				{
				this.state = 84;
				this.match(regexParser.LPAREN);
				this.state = 85;
				this.regExp();
				this.state = 86;
				this.match(regexParser.RPAREN);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public charClass(): CharClassContext {
		let localctx: CharClassContext = new CharClassContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, regexParser.RULE_charClass);
		try {
			this.state = 93;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 10:
			case 11:
			case 12:
			case 13:
			case 29:
			case 30:
			case 31:
			case 32:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 90;
				this.charClassEsc();
				}
				break;
			case 14:
			case 15:
			case 33:
			case 34:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 91;
				this.charClassExpr();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 92;
				this.match(regexParser.WildcardEsc);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public charClassExpr(): CharClassExprContext {
		let localctx: CharClassExprContext = new CharClassExprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, regexParser.RULE_charClassExpr);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 95;
			_la = this._input.LA(1);
			if(!(((((_la - 14)) & ~0x1F) === 0 && ((1 << (_la - 14)) & 1572867) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 96;
			this.charGroup();
			this.state = 97;
			this.match(regexParser.EndCharGroup);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public charGroup(): CharGroupContext {
		let localctx: CharGroupContext = new CharGroupContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, regexParser.RULE_charGroup);
		let _la: number;
		try {
			this.state = 114;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 100;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 7, this._ctx) ) {
				case 1:
					{
					this.state = 99;
					this.posCharGroup();
					}
					break;
				}
				this.state = 102;
				this.match(regexParser.DASH);
				this.state = 103;
				this.match(regexParser.DASH);
				this.state = 104;
				this.charClassExpr();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 105;
				this.posCharGroup();
				this.state = 106;
				this.match(regexParser.DASH);
				this.state = 107;
				this.charClassExpr();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 109;
				this.posCharGroup();
				this.state = 111;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===36) {
					{
					this.state = 110;
					this.match(regexParser.DASH);
					}
				}

				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 113;
				this.match(regexParser.DASH);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public posCharGroup(): PosCharGroupContext {
		let localctx: PosCharGroupContext = new PosCharGroupContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, regexParser.RULE_posCharGroup);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 117;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===36) {
				{
				this.state = 116;
				this.match(regexParser.DASH);
				}
			}

			this.state = 121;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 121;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 11, this._ctx) ) {
				case 1:
					{
					this.state = 119;
					this.charRange();
					}
					break;
				case 2:
					{
					this.state = 120;
					this.charClassEsc();
					}
					break;
				}
				}
				this.state = 123;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & 142082063) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public charRange(): CharRangeContext {
		let localctx: CharRangeContext = new CharRangeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, regexParser.RULE_charRange);
		try {
			this.state = 127;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 125;
				this.seRange();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 126;
				this.match(regexParser.XmlChar);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public seRange(): SeRangeContext {
		let localctx: SeRangeContext = new SeRangeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, regexParser.RULE_seRange);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 129;
			this.charOrEsc();
			this.state = 130;
			this.match(regexParser.DASH);
			this.state = 131;
			this.charOrEsc();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public charOrEsc(): CharOrEscContext {
		let localctx: CharOrEscContext = new CharOrEscContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, regexParser.RULE_charOrEsc);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 133;
			_la = this._input.LA(1);
			if(!(_la===10 || _la===37)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public charClassEsc(): CharClassEscContext {
		let localctx: CharClassEscContext = new CharClassEscContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, regexParser.RULE_charClassEsc);
		try {
			this.state = 141;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 10:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 135;
				this.match(regexParser.SingleCharEsc);
				}
				break;
			case 29:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 136;
				this.match(regexParser.NestedSingleCharEsc);
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 137;
				this.match(regexParser.MultiCharEsc);
				}
				break;
			case 30:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 138;
				this.match(regexParser.NestedMultiCharEsc);
				}
				break;
			case 12:
			case 31:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 139;
				this.catEsc();
				}
				break;
			case 13:
			case 32:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 140;
				this.complEsc();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public catEsc(): CatEscContext {
		let localctx: CatEscContext = new CatEscContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, regexParser.RULE_catEsc);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 143;
			_la = this._input.LA(1);
			if(!(_la===12 || _la===31)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 144;
			this.charProp();
			this.state = 145;
			this.match(regexParser.EndCategory);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public complEsc(): ComplEscContext {
		let localctx: ComplEscContext = new ComplEscContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, regexParser.RULE_complEsc);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 147;
			_la = this._input.LA(1);
			if(!(_la===13 || _la===32)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 148;
			this.charProp();
			this.state = 149;
			this.match(regexParser.EndCategory);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public charProp(): CharPropContext {
		let localctx: CharPropContext = new CharPropContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, regexParser.RULE_charProp);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 151;
			_la = this._input.LA(1);
			if(!(_la===20 || _la===28)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public static readonly _serializedATN: number[] = [4,1,37,154,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,1,0,1,0,1,0,1,1,1,1,1,1,5,1,47,8,1,10,1,12,1,50,
	9,1,1,2,5,2,53,8,2,10,2,12,2,56,9,2,1,3,1,3,3,3,60,8,3,1,4,1,4,1,4,1,4,
	1,4,1,4,1,4,3,4,69,8,4,1,5,1,5,1,5,3,5,74,8,5,1,6,1,6,1,6,1,6,1,7,1,7,1,
	7,1,8,1,8,1,8,1,8,1,8,1,8,3,8,89,8,8,1,9,1,9,1,9,3,9,94,8,9,1,10,1,10,1,
	10,1,10,1,11,3,11,101,8,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,
	3,11,112,8,11,1,11,3,11,115,8,11,1,12,3,12,118,8,12,1,12,1,12,4,12,122,
	8,12,11,12,12,12,123,1,13,1,13,3,13,128,8,13,1,14,1,14,1,14,1,14,1,15,1,
	15,1,16,1,16,1,16,1,16,1,16,1,16,3,16,142,8,16,1,17,1,17,1,17,1,17,1,18,
	1,18,1,18,1,18,1,19,1,19,1,19,0,0,20,0,2,4,6,8,10,12,14,16,18,20,22,24,
	26,28,30,32,34,36,38,0,5,2,0,14,15,33,34,2,0,10,10,37,37,2,0,12,12,31,31,
	2,0,13,13,32,32,2,0,20,20,28,28,159,0,40,1,0,0,0,2,43,1,0,0,0,4,54,1,0,
	0,0,6,57,1,0,0,0,8,68,1,0,0,0,10,73,1,0,0,0,12,75,1,0,0,0,14,79,1,0,0,0,
	16,88,1,0,0,0,18,93,1,0,0,0,20,95,1,0,0,0,22,114,1,0,0,0,24,117,1,0,0,0,
	26,127,1,0,0,0,28,129,1,0,0,0,30,133,1,0,0,0,32,141,1,0,0,0,34,143,1,0,
	0,0,36,147,1,0,0,0,38,151,1,0,0,0,40,41,3,2,1,0,41,42,5,0,0,1,42,1,1,0,
	0,0,43,48,3,4,2,0,44,45,5,3,0,0,45,47,3,4,2,0,46,44,1,0,0,0,47,50,1,0,0,
	0,48,46,1,0,0,0,48,49,1,0,0,0,49,3,1,0,0,0,50,48,1,0,0,0,51,53,3,6,3,0,
	52,51,1,0,0,0,53,56,1,0,0,0,54,52,1,0,0,0,54,55,1,0,0,0,55,5,1,0,0,0,56,
	54,1,0,0,0,57,59,3,16,8,0,58,60,3,8,4,0,59,58,1,0,0,0,59,60,1,0,0,0,60,
	7,1,0,0,0,61,69,5,5,0,0,62,69,5,6,0,0,63,69,5,4,0,0,64,65,5,9,0,0,65,66,
	3,10,5,0,66,67,5,16,0,0,67,69,1,0,0,0,68,61,1,0,0,0,68,62,1,0,0,0,68,63,
	1,0,0,0,68,64,1,0,0,0,69,9,1,0,0,0,70,74,3,12,6,0,71,74,3,14,7,0,72,74,
	5,17,0,0,73,70,1,0,0,0,73,71,1,0,0,0,73,72,1,0,0,0,74,11,1,0,0,0,75,76,
	5,17,0,0,76,77,5,18,0,0,77,78,5,17,0,0,78,13,1,0,0,0,79,80,5,17,0,0,80,
	81,5,18,0,0,81,15,1,0,0,0,82,89,5,8,0,0,83,89,3,18,9,0,84,85,5,1,0,0,85,
	86,3,2,1,0,86,87,5,2,0,0,87,89,1,0,0,0,88,82,1,0,0,0,88,83,1,0,0,0,88,84,
	1,0,0,0,89,17,1,0,0,0,90,94,3,32,16,0,91,94,3,20,10,0,92,94,5,7,0,0,93,
	90,1,0,0,0,93,91,1,0,0,0,93,92,1,0,0,0,94,19,1,0,0,0,95,96,7,0,0,0,96,97,
	3,22,11,0,97,98,5,35,0,0,98,21,1,0,0,0,99,101,3,24,12,0,100,99,1,0,0,0,
	100,101,1,0,0,0,101,102,1,0,0,0,102,103,5,36,0,0,103,104,5,36,0,0,104,115,
	3,20,10,0,105,106,3,24,12,0,106,107,5,36,0,0,107,108,3,20,10,0,108,115,
	1,0,0,0,109,111,3,24,12,0,110,112,5,36,0,0,111,110,1,0,0,0,111,112,1,0,
	0,0,112,115,1,0,0,0,113,115,5,36,0,0,114,100,1,0,0,0,114,105,1,0,0,0,114,
	109,1,0,0,0,114,113,1,0,0,0,115,23,1,0,0,0,116,118,5,36,0,0,117,116,1,0,
	0,0,117,118,1,0,0,0,118,121,1,0,0,0,119,122,3,26,13,0,120,122,3,32,16,0,
	121,119,1,0,0,0,121,120,1,0,0,0,122,123,1,0,0,0,123,121,1,0,0,0,123,124,
	1,0,0,0,124,25,1,0,0,0,125,128,3,28,14,0,126,128,5,37,0,0,127,125,1,0,0,
	0,127,126,1,0,0,0,128,27,1,0,0,0,129,130,3,30,15,0,130,131,5,36,0,0,131,
	132,3,30,15,0,132,29,1,0,0,0,133,134,7,1,0,0,134,31,1,0,0,0,135,142,5,10,
	0,0,136,142,5,29,0,0,137,142,5,11,0,0,138,142,5,30,0,0,139,142,3,34,17,
	0,140,142,3,36,18,0,141,135,1,0,0,0,141,136,1,0,0,0,141,137,1,0,0,0,141,
	138,1,0,0,0,141,139,1,0,0,0,141,140,1,0,0,0,142,33,1,0,0,0,143,144,7,2,
	0,0,144,145,3,38,19,0,145,146,5,19,0,0,146,35,1,0,0,0,147,148,7,3,0,0,148,
	149,3,38,19,0,149,150,5,19,0,0,150,37,1,0,0,0,151,152,7,4,0,0,152,39,1,
	0,0,0,15,48,54,59,68,73,88,93,100,111,114,117,121,123,127,141];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!regexParser.__ATN) {
			regexParser.__ATN = new ATNDeserializer().deserialize(regexParser._serializedATN);
		}

		return regexParser.__ATN;
	}


	static DecisionsToDFA = regexParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class RootContext extends ParserRuleContext {
	constructor(parser?: regexParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public regExp(): RegExpContext {
		return this.getTypedRuleContext(RegExpContext, 0) as RegExpContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(regexParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return regexParser.RULE_root;
	}
	public enterRule(listener: regexParserListener): void {
	    if(listener.enterRoot) {
	 		listener.enterRoot(this);
		}
	}
	public exitRule(listener: regexParserListener): void {
	    if(listener.exitRoot) {
	 		listener.exitRoot(this);
		}
	}
	// @Override
	public accept<Result>(visitor: regexParserVisitor<Result>): Result {
		if (visitor.visitRoot) {
			return visitor.visitRoot(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RegExpContext extends ParserRuleContext {
	constructor(parser?: regexParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public branch_list(): BranchContext[] {
		return this.getTypedRuleContexts(BranchContext) as BranchContext[];
	}
	public branch(i: number): BranchContext {
		return this.getTypedRuleContext(BranchContext, i) as BranchContext;
	}
	public PIPE_list(): TerminalNode[] {
	    	return this.getTokens(regexParser.PIPE);
	}
	public PIPE(i: number): TerminalNode {
		return this.getToken(regexParser.PIPE, i);
	}
    public get ruleIndex(): number {
    	return regexParser.RULE_regExp;
	}
	public enterRule(listener: regexParserListener): void {
	    if(listener.enterRegExp) {
	 		listener.enterRegExp(this);
		}
	}
	public exitRule(listener: regexParserListener): void {
	    if(listener.exitRegExp) {
	 		listener.exitRegExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: regexParserVisitor<Result>): Result {
		if (visitor.visitRegExp) {
			return visitor.visitRegExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BranchContext extends ParserRuleContext {
	constructor(parser?: regexParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public piece_list(): PieceContext[] {
		return this.getTypedRuleContexts(PieceContext) as PieceContext[];
	}
	public piece(i: number): PieceContext {
		return this.getTypedRuleContext(PieceContext, i) as PieceContext;
	}
    public get ruleIndex(): number {
    	return regexParser.RULE_branch;
	}
	public enterRule(listener: regexParserListener): void {
	    if(listener.enterBranch) {
	 		listener.enterBranch(this);
		}
	}
	public exitRule(listener: regexParserListener): void {
	    if(listener.exitBranch) {
	 		listener.exitBranch(this);
		}
	}
	// @Override
	public accept<Result>(visitor: regexParserVisitor<Result>): Result {
		if (visitor.visitBranch) {
			return visitor.visitBranch(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PieceContext extends ParserRuleContext {
	constructor(parser?: regexParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public atom(): AtomContext {
		return this.getTypedRuleContext(AtomContext, 0) as AtomContext;
	}
	public quantifier(): QuantifierContext {
		return this.getTypedRuleContext(QuantifierContext, 0) as QuantifierContext;
	}
    public get ruleIndex(): number {
    	return regexParser.RULE_piece;
	}
	public enterRule(listener: regexParserListener): void {
	    if(listener.enterPiece) {
	 		listener.enterPiece(this);
		}
	}
	public exitRule(listener: regexParserListener): void {
	    if(listener.exitPiece) {
	 		listener.exitPiece(this);
		}
	}
	// @Override
	public accept<Result>(visitor: regexParserVisitor<Result>): Result {
		if (visitor.visitPiece) {
			return visitor.visitPiece(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QuantifierContext extends ParserRuleContext {
	constructor(parser?: regexParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public QUESTION(): TerminalNode {
		return this.getToken(regexParser.QUESTION, 0);
	}
	public STAR(): TerminalNode {
		return this.getToken(regexParser.STAR, 0);
	}
	public PLUS(): TerminalNode {
		return this.getToken(regexParser.PLUS, 0);
	}
	public StartQuantity(): TerminalNode {
		return this.getToken(regexParser.StartQuantity, 0);
	}
	public quantity(): QuantityContext {
		return this.getTypedRuleContext(QuantityContext, 0) as QuantityContext;
	}
	public EndQuantity(): TerminalNode {
		return this.getToken(regexParser.EndQuantity, 0);
	}
    public get ruleIndex(): number {
    	return regexParser.RULE_quantifier;
	}
	public enterRule(listener: regexParserListener): void {
	    if(listener.enterQuantifier) {
	 		listener.enterQuantifier(this);
		}
	}
	public exitRule(listener: regexParserListener): void {
	    if(listener.exitQuantifier) {
	 		listener.exitQuantifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: regexParserVisitor<Result>): Result {
		if (visitor.visitQuantifier) {
			return visitor.visitQuantifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QuantityContext extends ParserRuleContext {
	constructor(parser?: regexParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public quantRange(): QuantRangeContext {
		return this.getTypedRuleContext(QuantRangeContext, 0) as QuantRangeContext;
	}
	public quantMin(): QuantMinContext {
		return this.getTypedRuleContext(QuantMinContext, 0) as QuantMinContext;
	}
	public QuantExact(): TerminalNode {
		return this.getToken(regexParser.QuantExact, 0);
	}
    public get ruleIndex(): number {
    	return regexParser.RULE_quantity;
	}
	public enterRule(listener: regexParserListener): void {
	    if(listener.enterQuantity) {
	 		listener.enterQuantity(this);
		}
	}
	public exitRule(listener: regexParserListener): void {
	    if(listener.exitQuantity) {
	 		listener.exitQuantity(this);
		}
	}
	// @Override
	public accept<Result>(visitor: regexParserVisitor<Result>): Result {
		if (visitor.visitQuantity) {
			return visitor.visitQuantity(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QuantRangeContext extends ParserRuleContext {
	constructor(parser?: regexParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public QuantExact_list(): TerminalNode[] {
	    	return this.getTokens(regexParser.QuantExact);
	}
	public QuantExact(i: number): TerminalNode {
		return this.getToken(regexParser.QuantExact, i);
	}
	public COMMA(): TerminalNode {
		return this.getToken(regexParser.COMMA, 0);
	}
    public get ruleIndex(): number {
    	return regexParser.RULE_quantRange;
	}
	public enterRule(listener: regexParserListener): void {
	    if(listener.enterQuantRange) {
	 		listener.enterQuantRange(this);
		}
	}
	public exitRule(listener: regexParserListener): void {
	    if(listener.exitQuantRange) {
	 		listener.exitQuantRange(this);
		}
	}
	// @Override
	public accept<Result>(visitor: regexParserVisitor<Result>): Result {
		if (visitor.visitQuantRange) {
			return visitor.visitQuantRange(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QuantMinContext extends ParserRuleContext {
	constructor(parser?: regexParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public QuantExact(): TerminalNode {
		return this.getToken(regexParser.QuantExact, 0);
	}
	public COMMA(): TerminalNode {
		return this.getToken(regexParser.COMMA, 0);
	}
    public get ruleIndex(): number {
    	return regexParser.RULE_quantMin;
	}
	public enterRule(listener: regexParserListener): void {
	    if(listener.enterQuantMin) {
	 		listener.enterQuantMin(this);
		}
	}
	public exitRule(listener: regexParserListener): void {
	    if(listener.exitQuantMin) {
	 		listener.exitQuantMin(this);
		}
	}
	// @Override
	public accept<Result>(visitor: regexParserVisitor<Result>): Result {
		if (visitor.visitQuantMin) {
			return visitor.visitQuantMin(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AtomContext extends ParserRuleContext {
	constructor(parser?: regexParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Char(): TerminalNode {
		return this.getToken(regexParser.Char, 0);
	}
	public charClass(): CharClassContext {
		return this.getTypedRuleContext(CharClassContext, 0) as CharClassContext;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(regexParser.LPAREN, 0);
	}
	public regExp(): RegExpContext {
		return this.getTypedRuleContext(RegExpContext, 0) as RegExpContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(regexParser.RPAREN, 0);
	}
    public get ruleIndex(): number {
    	return regexParser.RULE_atom;
	}
	public enterRule(listener: regexParserListener): void {
	    if(listener.enterAtom) {
	 		listener.enterAtom(this);
		}
	}
	public exitRule(listener: regexParserListener): void {
	    if(listener.exitAtom) {
	 		listener.exitAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: regexParserVisitor<Result>): Result {
		if (visitor.visitAtom) {
			return visitor.visitAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CharClassContext extends ParserRuleContext {
	constructor(parser?: regexParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public charClassEsc(): CharClassEscContext {
		return this.getTypedRuleContext(CharClassEscContext, 0) as CharClassEscContext;
	}
	public charClassExpr(): CharClassExprContext {
		return this.getTypedRuleContext(CharClassExprContext, 0) as CharClassExprContext;
	}
	public WildcardEsc(): TerminalNode {
		return this.getToken(regexParser.WildcardEsc, 0);
	}
    public get ruleIndex(): number {
    	return regexParser.RULE_charClass;
	}
	public enterRule(listener: regexParserListener): void {
	    if(listener.enterCharClass) {
	 		listener.enterCharClass(this);
		}
	}
	public exitRule(listener: regexParserListener): void {
	    if(listener.exitCharClass) {
	 		listener.exitCharClass(this);
		}
	}
	// @Override
	public accept<Result>(visitor: regexParserVisitor<Result>): Result {
		if (visitor.visitCharClass) {
			return visitor.visitCharClass(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CharClassExprContext extends ParserRuleContext {
	constructor(parser?: regexParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public charGroup(): CharGroupContext {
		return this.getTypedRuleContext(CharGroupContext, 0) as CharGroupContext;
	}
	public EndCharGroup(): TerminalNode {
		return this.getToken(regexParser.EndCharGroup, 0);
	}
	public NegCharGroup(): TerminalNode {
		return this.getToken(regexParser.NegCharGroup, 0);
	}
	public NestedNegCharGroup(): TerminalNode {
		return this.getToken(regexParser.NestedNegCharGroup, 0);
	}
	public PosCharGroup(): TerminalNode {
		return this.getToken(regexParser.PosCharGroup, 0);
	}
	public NestedPosCharGroup(): TerminalNode {
		return this.getToken(regexParser.NestedPosCharGroup, 0);
	}
    public get ruleIndex(): number {
    	return regexParser.RULE_charClassExpr;
	}
	public enterRule(listener: regexParserListener): void {
	    if(listener.enterCharClassExpr) {
	 		listener.enterCharClassExpr(this);
		}
	}
	public exitRule(listener: regexParserListener): void {
	    if(listener.exitCharClassExpr) {
	 		listener.exitCharClassExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: regexParserVisitor<Result>): Result {
		if (visitor.visitCharClassExpr) {
			return visitor.visitCharClassExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CharGroupContext extends ParserRuleContext {
	constructor(parser?: regexParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DASH_list(): TerminalNode[] {
	    	return this.getTokens(regexParser.DASH);
	}
	public DASH(i: number): TerminalNode {
		return this.getToken(regexParser.DASH, i);
	}
	public charClassExpr(): CharClassExprContext {
		return this.getTypedRuleContext(CharClassExprContext, 0) as CharClassExprContext;
	}
	public posCharGroup(): PosCharGroupContext {
		return this.getTypedRuleContext(PosCharGroupContext, 0) as PosCharGroupContext;
	}
    public get ruleIndex(): number {
    	return regexParser.RULE_charGroup;
	}
	public enterRule(listener: regexParserListener): void {
	    if(listener.enterCharGroup) {
	 		listener.enterCharGroup(this);
		}
	}
	public exitRule(listener: regexParserListener): void {
	    if(listener.exitCharGroup) {
	 		listener.exitCharGroup(this);
		}
	}
	// @Override
	public accept<Result>(visitor: regexParserVisitor<Result>): Result {
		if (visitor.visitCharGroup) {
			return visitor.visitCharGroup(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PosCharGroupContext extends ParserRuleContext {
	constructor(parser?: regexParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DASH(): TerminalNode {
		return this.getToken(regexParser.DASH, 0);
	}
	public charRange_list(): CharRangeContext[] {
		return this.getTypedRuleContexts(CharRangeContext) as CharRangeContext[];
	}
	public charRange(i: number): CharRangeContext {
		return this.getTypedRuleContext(CharRangeContext, i) as CharRangeContext;
	}
	public charClassEsc_list(): CharClassEscContext[] {
		return this.getTypedRuleContexts(CharClassEscContext) as CharClassEscContext[];
	}
	public charClassEsc(i: number): CharClassEscContext {
		return this.getTypedRuleContext(CharClassEscContext, i) as CharClassEscContext;
	}
    public get ruleIndex(): number {
    	return regexParser.RULE_posCharGroup;
	}
	public enterRule(listener: regexParserListener): void {
	    if(listener.enterPosCharGroup) {
	 		listener.enterPosCharGroup(this);
		}
	}
	public exitRule(listener: regexParserListener): void {
	    if(listener.exitPosCharGroup) {
	 		listener.exitPosCharGroup(this);
		}
	}
	// @Override
	public accept<Result>(visitor: regexParserVisitor<Result>): Result {
		if (visitor.visitPosCharGroup) {
			return visitor.visitPosCharGroup(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CharRangeContext extends ParserRuleContext {
	constructor(parser?: regexParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public seRange(): SeRangeContext {
		return this.getTypedRuleContext(SeRangeContext, 0) as SeRangeContext;
	}
	public XmlChar(): TerminalNode {
		return this.getToken(regexParser.XmlChar, 0);
	}
    public get ruleIndex(): number {
    	return regexParser.RULE_charRange;
	}
	public enterRule(listener: regexParserListener): void {
	    if(listener.enterCharRange) {
	 		listener.enterCharRange(this);
		}
	}
	public exitRule(listener: regexParserListener): void {
	    if(listener.exitCharRange) {
	 		listener.exitCharRange(this);
		}
	}
	// @Override
	public accept<Result>(visitor: regexParserVisitor<Result>): Result {
		if (visitor.visitCharRange) {
			return visitor.visitCharRange(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SeRangeContext extends ParserRuleContext {
	constructor(parser?: regexParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public charOrEsc_list(): CharOrEscContext[] {
		return this.getTypedRuleContexts(CharOrEscContext) as CharOrEscContext[];
	}
	public charOrEsc(i: number): CharOrEscContext {
		return this.getTypedRuleContext(CharOrEscContext, i) as CharOrEscContext;
	}
	public DASH(): TerminalNode {
		return this.getToken(regexParser.DASH, 0);
	}
    public get ruleIndex(): number {
    	return regexParser.RULE_seRange;
	}
	public enterRule(listener: regexParserListener): void {
	    if(listener.enterSeRange) {
	 		listener.enterSeRange(this);
		}
	}
	public exitRule(listener: regexParserListener): void {
	    if(listener.exitSeRange) {
	 		listener.exitSeRange(this);
		}
	}
	// @Override
	public accept<Result>(visitor: regexParserVisitor<Result>): Result {
		if (visitor.visitSeRange) {
			return visitor.visitSeRange(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CharOrEscContext extends ParserRuleContext {
	constructor(parser?: regexParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public XmlChar(): TerminalNode {
		return this.getToken(regexParser.XmlChar, 0);
	}
	public SingleCharEsc(): TerminalNode {
		return this.getToken(regexParser.SingleCharEsc, 0);
	}
    public get ruleIndex(): number {
    	return regexParser.RULE_charOrEsc;
	}
	public enterRule(listener: regexParserListener): void {
	    if(listener.enterCharOrEsc) {
	 		listener.enterCharOrEsc(this);
		}
	}
	public exitRule(listener: regexParserListener): void {
	    if(listener.exitCharOrEsc) {
	 		listener.exitCharOrEsc(this);
		}
	}
	// @Override
	public accept<Result>(visitor: regexParserVisitor<Result>): Result {
		if (visitor.visitCharOrEsc) {
			return visitor.visitCharOrEsc(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CharClassEscContext extends ParserRuleContext {
	constructor(parser?: regexParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SingleCharEsc(): TerminalNode {
		return this.getToken(regexParser.SingleCharEsc, 0);
	}
	public NestedSingleCharEsc(): TerminalNode {
		return this.getToken(regexParser.NestedSingleCharEsc, 0);
	}
	public MultiCharEsc(): TerminalNode {
		return this.getToken(regexParser.MultiCharEsc, 0);
	}
	public NestedMultiCharEsc(): TerminalNode {
		return this.getToken(regexParser.NestedMultiCharEsc, 0);
	}
	public catEsc(): CatEscContext {
		return this.getTypedRuleContext(CatEscContext, 0) as CatEscContext;
	}
	public complEsc(): ComplEscContext {
		return this.getTypedRuleContext(ComplEscContext, 0) as ComplEscContext;
	}
    public get ruleIndex(): number {
    	return regexParser.RULE_charClassEsc;
	}
	public enterRule(listener: regexParserListener): void {
	    if(listener.enterCharClassEsc) {
	 		listener.enterCharClassEsc(this);
		}
	}
	public exitRule(listener: regexParserListener): void {
	    if(listener.exitCharClassEsc) {
	 		listener.exitCharClassEsc(this);
		}
	}
	// @Override
	public accept<Result>(visitor: regexParserVisitor<Result>): Result {
		if (visitor.visitCharClassEsc) {
			return visitor.visitCharClassEsc(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CatEscContext extends ParserRuleContext {
	constructor(parser?: regexParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public charProp(): CharPropContext {
		return this.getTypedRuleContext(CharPropContext, 0) as CharPropContext;
	}
	public EndCategory(): TerminalNode {
		return this.getToken(regexParser.EndCategory, 0);
	}
	public CatEsc(): TerminalNode {
		return this.getToken(regexParser.CatEsc, 0);
	}
	public NestedCatEsc(): TerminalNode {
		return this.getToken(regexParser.NestedCatEsc, 0);
	}
    public get ruleIndex(): number {
    	return regexParser.RULE_catEsc;
	}
	public enterRule(listener: regexParserListener): void {
	    if(listener.enterCatEsc) {
	 		listener.enterCatEsc(this);
		}
	}
	public exitRule(listener: regexParserListener): void {
	    if(listener.exitCatEsc) {
	 		listener.exitCatEsc(this);
		}
	}
	// @Override
	public accept<Result>(visitor: regexParserVisitor<Result>): Result {
		if (visitor.visitCatEsc) {
			return visitor.visitCatEsc(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComplEscContext extends ParserRuleContext {
	constructor(parser?: regexParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public charProp(): CharPropContext {
		return this.getTypedRuleContext(CharPropContext, 0) as CharPropContext;
	}
	public EndCategory(): TerminalNode {
		return this.getToken(regexParser.EndCategory, 0);
	}
	public ComplEsc(): TerminalNode {
		return this.getToken(regexParser.ComplEsc, 0);
	}
	public NestedComplEsc(): TerminalNode {
		return this.getToken(regexParser.NestedComplEsc, 0);
	}
    public get ruleIndex(): number {
    	return regexParser.RULE_complEsc;
	}
	public enterRule(listener: regexParserListener): void {
	    if(listener.enterComplEsc) {
	 		listener.enterComplEsc(this);
		}
	}
	public exitRule(listener: regexParserListener): void {
	    if(listener.exitComplEsc) {
	 		listener.exitComplEsc(this);
		}
	}
	// @Override
	public accept<Result>(visitor: regexParserVisitor<Result>): Result {
		if (visitor.visitComplEsc) {
			return visitor.visitComplEsc(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CharPropContext extends ParserRuleContext {
	constructor(parser?: regexParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IsCategory(): TerminalNode {
		return this.getToken(regexParser.IsCategory, 0);
	}
	public IsBlock(): TerminalNode {
		return this.getToken(regexParser.IsBlock, 0);
	}
    public get ruleIndex(): number {
    	return regexParser.RULE_charProp;
	}
	public enterRule(listener: regexParserListener): void {
	    if(listener.enterCharProp) {
	 		listener.enterCharProp(this);
		}
	}
	public exitRule(listener: regexParserListener): void {
	    if(listener.exitCharProp) {
	 		listener.exitCharProp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: regexParserVisitor<Result>): Result {
		if (visitor.visitCharProp) {
			return visitor.visitCharProp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
