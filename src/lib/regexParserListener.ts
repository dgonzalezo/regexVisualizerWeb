// Generated from regexParser.g4 by ANTLR 4.13.1

import {ParseTreeListener} from "antlr4";


import { RootContext } from "./regexParser";
import { RegExpContext } from "./regexParser";
import { BranchContext } from "./regexParser";
import { PieceContext } from "./regexParser";
import { QuantifierContext } from "./regexParser";
import { QuantityContext } from "./regexParser";
import { QuantRangeContext } from "./regexParser";
import { QuantMinContext } from "./regexParser";
import { AtomContext } from "./regexParser";
import { CharClassContext } from "./regexParser";
import { CharClassExprContext } from "./regexParser";
import { CharGroupContext } from "./regexParser";
import { PosCharGroupContext } from "./regexParser";
import { CharRangeContext } from "./regexParser";
import { SeRangeContext } from "./regexParser";
import { CharOrEscContext } from "./regexParser";
import { CharClassEscContext } from "./regexParser";
import { CatEscContext } from "./regexParser";
import { ComplEscContext } from "./regexParser";
import { CharPropContext } from "./regexParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `regexParser`.
 */
export default class regexParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `regexParser.root`.
	 * @param ctx the parse tree
	 */
	enterRoot?: (ctx: RootContext) => void;
	/**
	 * Exit a parse tree produced by `regexParser.root`.
	 * @param ctx the parse tree
	 */
	exitRoot?: (ctx: RootContext) => void;
	/**
	 * Enter a parse tree produced by `regexParser.regExp`.
	 * @param ctx the parse tree
	 */
	enterRegExp?: (ctx: RegExpContext) => void;
	/**
	 * Exit a parse tree produced by `regexParser.regExp`.
	 * @param ctx the parse tree
	 */
	exitRegExp?: (ctx: RegExpContext) => void;
	/**
	 * Enter a parse tree produced by `regexParser.branch`.
	 * @param ctx the parse tree
	 */
	enterBranch?: (ctx: BranchContext) => void;
	/**
	 * Exit a parse tree produced by `regexParser.branch`.
	 * @param ctx the parse tree
	 */
	exitBranch?: (ctx: BranchContext) => void;
	/**
	 * Enter a parse tree produced by `regexParser.piece`.
	 * @param ctx the parse tree
	 */
	enterPiece?: (ctx: PieceContext) => void;
	/**
	 * Exit a parse tree produced by `regexParser.piece`.
	 * @param ctx the parse tree
	 */
	exitPiece?: (ctx: PieceContext) => void;
	/**
	 * Enter a parse tree produced by `regexParser.quantifier`.
	 * @param ctx the parse tree
	 */
	enterQuantifier?: (ctx: QuantifierContext) => void;
	/**
	 * Exit a parse tree produced by `regexParser.quantifier`.
	 * @param ctx the parse tree
	 */
	exitQuantifier?: (ctx: QuantifierContext) => void;
	/**
	 * Enter a parse tree produced by `regexParser.quantity`.
	 * @param ctx the parse tree
	 */
	enterQuantity?: (ctx: QuantityContext) => void;
	/**
	 * Exit a parse tree produced by `regexParser.quantity`.
	 * @param ctx the parse tree
	 */
	exitQuantity?: (ctx: QuantityContext) => void;
	/**
	 * Enter a parse tree produced by `regexParser.quantRange`.
	 * @param ctx the parse tree
	 */
	enterQuantRange?: (ctx: QuantRangeContext) => void;
	/**
	 * Exit a parse tree produced by `regexParser.quantRange`.
	 * @param ctx the parse tree
	 */
	exitQuantRange?: (ctx: QuantRangeContext) => void;
	/**
	 * Enter a parse tree produced by `regexParser.quantMin`.
	 * @param ctx the parse tree
	 */
	enterQuantMin?: (ctx: QuantMinContext) => void;
	/**
	 * Exit a parse tree produced by `regexParser.quantMin`.
	 * @param ctx the parse tree
	 */
	exitQuantMin?: (ctx: QuantMinContext) => void;
	/**
	 * Enter a parse tree produced by `regexParser.atom`.
	 * @param ctx the parse tree
	 */
	enterAtom?: (ctx: AtomContext) => void;
	/**
	 * Exit a parse tree produced by `regexParser.atom`.
	 * @param ctx the parse tree
	 */
	exitAtom?: (ctx: AtomContext) => void;
	/**
	 * Enter a parse tree produced by `regexParser.charClass`.
	 * @param ctx the parse tree
	 */
	enterCharClass?: (ctx: CharClassContext) => void;
	/**
	 * Exit a parse tree produced by `regexParser.charClass`.
	 * @param ctx the parse tree
	 */
	exitCharClass?: (ctx: CharClassContext) => void;
	/**
	 * Enter a parse tree produced by `regexParser.charClassExpr`.
	 * @param ctx the parse tree
	 */
	enterCharClassExpr?: (ctx: CharClassExprContext) => void;
	/**
	 * Exit a parse tree produced by `regexParser.charClassExpr`.
	 * @param ctx the parse tree
	 */
	exitCharClassExpr?: (ctx: CharClassExprContext) => void;
	/**
	 * Enter a parse tree produced by `regexParser.charGroup`.
	 * @param ctx the parse tree
	 */
	enterCharGroup?: (ctx: CharGroupContext) => void;
	/**
	 * Exit a parse tree produced by `regexParser.charGroup`.
	 * @param ctx the parse tree
	 */
	exitCharGroup?: (ctx: CharGroupContext) => void;
	/**
	 * Enter a parse tree produced by `regexParser.posCharGroup`.
	 * @param ctx the parse tree
	 */
	enterPosCharGroup?: (ctx: PosCharGroupContext) => void;
	/**
	 * Exit a parse tree produced by `regexParser.posCharGroup`.
	 * @param ctx the parse tree
	 */
	exitPosCharGroup?: (ctx: PosCharGroupContext) => void;
	/**
	 * Enter a parse tree produced by `regexParser.charRange`.
	 * @param ctx the parse tree
	 */
	enterCharRange?: (ctx: CharRangeContext) => void;
	/**
	 * Exit a parse tree produced by `regexParser.charRange`.
	 * @param ctx the parse tree
	 */
	exitCharRange?: (ctx: CharRangeContext) => void;
	/**
	 * Enter a parse tree produced by `regexParser.seRange`.
	 * @param ctx the parse tree
	 */
	enterSeRange?: (ctx: SeRangeContext) => void;
	/**
	 * Exit a parse tree produced by `regexParser.seRange`.
	 * @param ctx the parse tree
	 */
	exitSeRange?: (ctx: SeRangeContext) => void;
	/**
	 * Enter a parse tree produced by `regexParser.charOrEsc`.
	 * @param ctx the parse tree
	 */
	enterCharOrEsc?: (ctx: CharOrEscContext) => void;
	/**
	 * Exit a parse tree produced by `regexParser.charOrEsc`.
	 * @param ctx the parse tree
	 */
	exitCharOrEsc?: (ctx: CharOrEscContext) => void;
	/**
	 * Enter a parse tree produced by `regexParser.charClassEsc`.
	 * @param ctx the parse tree
	 */
	enterCharClassEsc?: (ctx: CharClassEscContext) => void;
	/**
	 * Exit a parse tree produced by `regexParser.charClassEsc`.
	 * @param ctx the parse tree
	 */
	exitCharClassEsc?: (ctx: CharClassEscContext) => void;
	/**
	 * Enter a parse tree produced by `regexParser.catEsc`.
	 * @param ctx the parse tree
	 */
	enterCatEsc?: (ctx: CatEscContext) => void;
	/**
	 * Exit a parse tree produced by `regexParser.catEsc`.
	 * @param ctx the parse tree
	 */
	exitCatEsc?: (ctx: CatEscContext) => void;
	/**
	 * Enter a parse tree produced by `regexParser.complEsc`.
	 * @param ctx the parse tree
	 */
	enterComplEsc?: (ctx: ComplEscContext) => void;
	/**
	 * Exit a parse tree produced by `regexParser.complEsc`.
	 * @param ctx the parse tree
	 */
	exitComplEsc?: (ctx: ComplEscContext) => void;
	/**
	 * Enter a parse tree produced by `regexParser.charProp`.
	 * @param ctx the parse tree
	 */
	enterCharProp?: (ctx: CharPropContext) => void;
	/**
	 * Exit a parse tree produced by `regexParser.charProp`.
	 * @param ctx the parse tree
	 */
	exitCharProp?: (ctx: CharPropContext) => void;
}

