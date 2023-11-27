// Generated from regexParser.g4 by ANTLR 4.13.1

import {ParseTreeVisitor} from 'antlr4';


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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `regexParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class regexParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `regexParser.root`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRoot?: (ctx: RootContext) => Result;
	/**
	 * Visit a parse tree produced by `regexParser.regExp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRegExp?: (ctx: RegExpContext) => Result;
	/**
	 * Visit a parse tree produced by `regexParser.branch`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBranch?: (ctx: BranchContext) => Result;
	/**
	 * Visit a parse tree produced by `regexParser.piece`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPiece?: (ctx: PieceContext) => Result;
	/**
	 * Visit a parse tree produced by `regexParser.quantifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuantifier?: (ctx: QuantifierContext) => Result;
	/**
	 * Visit a parse tree produced by `regexParser.quantity`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuantity?: (ctx: QuantityContext) => Result;
	/**
	 * Visit a parse tree produced by `regexParser.quantRange`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuantRange?: (ctx: QuantRangeContext) => Result;
	/**
	 * Visit a parse tree produced by `regexParser.quantMin`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuantMin?: (ctx: QuantMinContext) => Result;
	/**
	 * Visit a parse tree produced by `regexParser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtom?: (ctx: AtomContext) => Result;
	/**
	 * Visit a parse tree produced by `regexParser.charClass`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCharClass?: (ctx: CharClassContext) => Result;
	/**
	 * Visit a parse tree produced by `regexParser.charClassExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCharClassExpr?: (ctx: CharClassExprContext) => Result;
	/**
	 * Visit a parse tree produced by `regexParser.charGroup`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCharGroup?: (ctx: CharGroupContext) => Result;
	/**
	 * Visit a parse tree produced by `regexParser.posCharGroup`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPosCharGroup?: (ctx: PosCharGroupContext) => Result;
	/**
	 * Visit a parse tree produced by `regexParser.charRange`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCharRange?: (ctx: CharRangeContext) => Result;
	/**
	 * Visit a parse tree produced by `regexParser.seRange`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSeRange?: (ctx: SeRangeContext) => Result;
	/**
	 * Visit a parse tree produced by `regexParser.charOrEsc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCharOrEsc?: (ctx: CharOrEscContext) => Result;
	/**
	 * Visit a parse tree produced by `regexParser.charClassEsc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCharClassEsc?: (ctx: CharClassEscContext) => Result;
	/**
	 * Visit a parse tree produced by `regexParser.catEsc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCatEsc?: (ctx: CatEscContext) => Result;
	/**
	 * Visit a parse tree produced by `regexParser.complEsc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComplEsc?: (ctx: ComplEscContext) => Result;
	/**
	 * Visit a parse tree produced by `regexParser.charProp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCharProp?: (ctx: CharPropContext) => Result;
}

