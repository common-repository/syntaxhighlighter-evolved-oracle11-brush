/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/
 *
 * This brush was originally created by Ildar Shaimordanov
 * homepage:   http://with-love-from-siberia.blogspot.com/
 * brush page: http://with-love-from-siberia.blogspot.com/2009/07/finest-code-syntax-highlighter.html
 */
SyntaxHighlighter.brushes.Oracle11 = function()
{
    var geshiKeywords1 = 'ABS ACCESS ACOS ADD ADD_MONTHS ALL ALTER ANALYZE AND ANY APPENDCHILDXML ARRAY AS ASC ASCII ' +
        'ASCIISTR ASIN ASSOCIATE AT ATAN ATAN2 AUDIT AUTHID AVG BEGIN BETWEEN BFILENAME BIN_TO_NUM BINARY_INTEGER BITAND ' +
        'BODY BOOLEAN BULK BY CALL CARDINALITY CASCADE CASE CAST CEIL CHAR CHAR_BASE CHARTOROWID CHECK CHR CLOSE CLUSTER ' +
        'CLUSTER_ID CLUSTER_PROBABILITY CLUSTER_SET COALESCE COLLECT COLUMN COMMENT COMMIT COMPOSE COMPRESS CONCAT ' +
        'CONNECT CONSTANT CONSTRAINT CONSTRAINTS CONTEXT CONTROLFILE CONVERT CORR CORR_K CORR_S COS COSH COST COUNT ' +
        'COVAR_POP COVAR_SAMP CREATE CUBE_TABLE CUME_DIST CURRENT CURRENT_DATE CURRENT_TIMESTAMP CURRVAL CURSOR CV ' +
        'DATABASE DATAOBJ_TO_PARTITION DATE DAY DBTIMEZONE DECIMAL DECLARE DECODE DECOMPOSE DEFAULT DELETE DELETEXML ' +
        'DENSE_RANK DEPTH DEREF DESC DIMENSION DIRECTORY DISASSOCIATE DISTINCT DO DROP DUMP ELSE ELSIF EMPTY_BLOB ' +
        'EMPTY_CLOB END EXCEPTION EXCLUSIVE EXEC EXECUTE EXISTS EXISTSNODE EXIT EXP EXPLAIN EXTENDS EXTRACT EXTRACTVALUE ' +
        'FALSE FEATURE_ID FEATURE_SET FEATURE_VALUE FETCH FILE FIRST FIRST_VALUE FLOAT FLOOR FOR FORALL FROM FROM_TZ ' +
        'FUNCTION GOTO GRANT GREATEST GROUP GROUP_ID GROUPING GROUPING_ID HAVING HEAP HEXTORAW HOUR IDENTIFIED IF ' +
        'IMMEDIATE IN INCREMENT INDEX INDEXTYPE INDICATOR INITCAP INITIAL INSERT INSERTCHILDXML INSERTXMLBEFORE INSTR ' +
        'INSTRB INTEGER INTERFACE INTERSECT INTERVAL INTO IS ISOLATION ITERATION_NUMBER JAVA KEY LAG LAST LAST_DAY ' +
        'LAST_VALUE LEAD LEAST LENGTH LENGTHB LEVEL LIBRARY LIKE LIMITED LINK LN LNNVL LOCALTIMESTAMP LOCK LOG LONG LOOP ' +
        'LOWER LPAD LTRIM MAKE_REF MATERIALIZED MAX MAXEXTENTS MEDIAN MIN MINUS MINUTE MLSLABEL MOD MODE MODIFY MONTH ' +
        'MONTHS_BETWEEN NANVL NATURAL NATURALN NCHR NEW NEW_TIME NEXT_DAY NEXTVAL NLS_CHARSET_DECL_LEN NLS_CHARSET_ID ' +
        'NLS_CHARSET_NAME NLS_INITCAP NLS_LOWER NLS_UPPER NLSSORT NOAUDIT NOCOMPRESS NOCOPY NOT NOWAIT NTILE NULL NULLIF ' +
        'NUMBER NUMBER_BASE NUMTODSINTERVAL NUMTOYMINTERVAL NVL NVL2 OCIROWID OF OFFLINE ON ONLINE OPAQUE OPEN OPERATOR ' +
        'OPTION OR ORA_HASH ORDER ORGANIZATION OTHERS OUT OUTLINE PACKAGE PARTITION PATH PCTFREE PERCENT_RANK ' +
        'PERCENTILE_CONT PERCENTILE_DISC PLAN PLS_INTEGER POSITIVE POSITIVEN POWER POWERMULTISET ' +
        'POWERMULTISET_BY_CARDINALITY PRAGMA PREDICTION PREDICTION_BOUNDS PREDICTION_COST PREDICTION_DETAILS ' +
        'PREDICTION_PROBABILITY PREDICTION_SET PRESENTNNV PRESENTV PREVIOUS PRIMARY PRIOR PRIVATE PRIVILEGES PROCEDURE ' +
        'PROFILE PUBLIC RAISE RANGE RANK RATIO_TO_REPORT RAW RAWTOHEX RAWTONHEX REAL RECORD REF REFTOHEX REGEXP_COUNT ' +
        'REGEXP_INSTR REGEXP_REPLACE REGEXP_SUBSTR REGR_AVGX REGR_AVGY REGR_COUNT REGR_INTERCEPT REGR_R2 REGR_SLOPE ' +
        'REGR_SXX REGR_SXY REGR_SYY RELEASE REMAINDER RENAME REPLACE RESOURCE RETURN RETURNING REVERSE REVOKE ROLE ' +
        'ROLLBACK ROUND ROW ROW_NUMBER ROWID ROWIDTOCHAR ROWIDTONCHAR ROWNUM ROWS ROWTYPE RPAD RTRIM SAVEPOINT SCHEMA ' +
        'SCN_TO_TIMESTAMP SECOND SEGMENT SELECT SEPERATE SEQUENCE SESSION SESSIONTIMEZONE SET SHARE SIGN SIN SINH SIZE ' +
        'SMALLINT SOUNDEX SPACE SQL SQLCODE SQLERRM SQRT START STATISTICS STATS_BINOMIAL_TEST STATS_CROSSTAB ' +
        'STATS_F_TEST STATS_KS_TEST STATS_MODE STATS_MW_TEST STATS_ONE_WAY_ANOVA STATS_T_TEST_INDEP STATS_T_TEST_INDEPU ' +
        'STATS_T_TEST_ONE STATS_T_TEST_PAIRED STATS_WSR_TEST STDDEV STDDEV_POP STDDEV_SAMP STOP SUBSTR SUBSTRB SUBTYPE ' +
        'SUCCESSFUL SUM SYNONYM SYS_CONNECT_BY_PATH SYS_CONTEXT SYS_DBURIGEN SYS_EXTRACT_UTC SYS_GUID SYS_TYPEID ' +
        'SYS_XMLAGG SYS_XMLGEN SYSDATE SYSTEM SYSTIMESTAMP TABLE TABLESPACE TAN TANH TEMPORARY THEN TIME TIMESTAMP ' +
        'TIMESTAMP_TO_SCN TIMEZONE_ABBR TIMEZONE_HOUR TIMEZONE_MINUTE TIMEZONE_REGION TIMING TO TO_BINARY_DOUBLE ' +
        'TO_BINARY_FLOAT TO_CHAR TO_CLOB TO_DATE TO_DSINTERVAL TO_LOB TO_MULTI_BYTE TO_NCHAR TO_NCLOB TO_NUMBER ' +
        'TO_SINGLE_BYTE TO_TIMESTAMP TO_TIMESTAMP_TZ TO_YMINTERVAL TRANSACTION TRANSLATE TREAT TRIGGER TRIM TRUE TRUNC ' +
        'TRUNCATE TYPE TZ_OFFSET UI UID UNION UNIQUE UNISTR UPDATE UPDATEXML UPPER USE USER USERENV USING VALIDATE VALUE ' +
        'VALUES VAR_POP VAR_SAMP VARCHAR VARCHAR2 VARIANCE VIEW VSIZE WHEN WHENEVER WHERE WHILE WIDTH_BUCKET WITH WORK ' +
        'WRITE XMLAGG XMLCAST XMLCDATA XMLCOLATTVAL XMLCOMMENT XMLCONCAT XMLDIFF XMLELEMENT XMLEXISTS XMLFOREST XMLPARSE ' +
        'XMLPATCH XMLPI XMLQUERY XMLROOT XMLSEQUENCE XMLSERIALIZE XMLTABLE XMLTRANSFORM YEAR ZONE';
    
        this.regexList = [
        // REM Comments
        {   regex: /(^::|rem).*$/gmi,                               css: 'comments'},
        // "Strings", 'Strings ' + `Strings`, ECHO String
        {   regex: SyntaxHighlighter.regexLib.doubleQuotedString,   css: 'string'},
        {   regex: SyntaxHighlighter.regexLib.singleQuotedString,   css: 'string'},
        {   regex: /`(?:\.|(\\\`)|[^\``\n])*`/g,                    css: 'string'},
        {   regex: /echo.*$/gmi,                                    css: 'string'},
        // :Labels
        {   regex: /^:.+$/gmi,                                      css: 'color3'},
        // %Variables%, !Variables!
        {   regex: /(%|!)\w+\1/gmi,                                 css: 'variable'},
        // %%a variable Refs, %1 variable Refs
        {   regex: /%\*|%%?~?[fdpnxsatz]*[0-9a-z]\b/gmi,            css: 'variable'},
        // geshi
        {   regex: new RegExp(this.getKeywords(geshiKeywords1), 'gmi'),   css: 'oracle11'}
    ];
};

SyntaxHighlighter.brushes.Oracle11.prototype = new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.Oracle11.aliases = ['oracle11'];
