import DataTables, { Dom, Api } from 'datatables.net';
export { default } from 'datatables.net';

interface IDefaults {
    i18n: {
        button: string;
    };
    end: number;
    left?: number;
    leftColumns?: number;
    right?: number;
    rightColumns?: number;
    start: number;
}
interface IS {
    dt: Api;
    rtl: boolean;
}
interface IClasses {
    bottomBlocker: string;
    fixedEnd: string;
    fixedLeft: string;
    fixedRight: string;
    fixedStart: string;
    tableFixedEnd: string;
    tableFixedLeft: string;
    tableFixedStart: string;
    tableFixedRight: string;
    topBlocker: string;
    tableScrollingEnd: string;
    tableScrollingLeft: string;
    tableScrollingRight: string;
    tableScrollingStart: string;
}
interface IDOM {
    bottomBlocker: Dom;
    topBlocker: Dom;
    scroller: Dom;
}
declare class FixedColumns {
    private static version;
    private static classes;
    private static defaults;
    classes: IClasses;
    c: IDefaults;
    dom: IDOM;
    s: IS;
    constructor(settings: any, opts: IDefaults);
    /**
     * Getter for the `fixedColumns.end` property
     *
     * @param newVal Optional. If present this will be the new value for the number of end fixed columns
     * @returns The number of end fixed columns
     */
    end(): number;
    /**
     * Setter for the `fixedColumns.right` property
     *
     * @param newVal The new value for the number of right fixed columns
     * @returns DataTables API for chaining
     */
    end(newVal: number): any;
    /**
     * Left fix - accounting for RTL
     *
     * @param count Columns to fix, or undefined for getter
     */
    left(count?: number): any;
    /**
     * Right fix - accounting for RTL
     *
     * @param count Columns to fix, or undefined for getter
     */
    right(count?: number): any;
    /**
     * Getter for the `fixedColumns.start` property
     *
     * @param newVal Optional. If present this will be the new value for the number of start fixed columns
     * @returns The number of start fixed columns
     */
    start(): number;
    /**
     * Setter for the `fixedColumns.start` property
     *
     * @param newVal The new value for the number of left fixed columns
     * @returns DataTables API for chaining
     */
    start(newVal: number): any;
    /**
     * Iterates over the columns, fixing the appropriate ones to the left and right
     */
    private _addStyles;
    /**
     * Clean up
     */
    private _destroy;
    /**
     * Fix or unfix a column
     *
     * @param idx Column visible index to operate on
     * @param offset Offset from the start (pixels)
     * @param side start, end or none to unfix a column
     * @param header DT header structure object
     * @param footer DT footer structure object
     */
    private _fixColumn;
    /**
     * Update classes on the table to indicate if the table is scrolling or not
     */
    private _scroll;
    private _setKeyTableListener;
    /**
     * Sum a range of values from an array
     *
     * @param widths
     * @param index
     * @returns
     */
    private _sum;
}

declare module 'datatables.net' {
    interface Config {
        fixedColumns?: boolean | FixedColumnsConfig;
    }
    interface Defaults {
        fixedColumns?: boolean | FixedColumnsConfig;
    }
    interface Context {
        _fixedColumns: FixedColumns;
    }
    interface FixedColumnsConfig {
        /**
         * The number of columns to fix at the end of the table (ltr and rtl aware)
         */
        end?: number;
        i18n?: {
            /** Text for `fixedColumns` button */
            button?: string;
        };
        /**
         * The number of columns on the left hand side of the table to fix in place.
         */
        left?: number;
        /**
         * The number of columns on the left hand side of the table to fix in place.
         * @deprecated Use `start`
         */
        leftColumns?: number;
        /**
         * The number of columns on the right hand side of the table to fix in place.
         */
        right?: number;
        /**
         * The number of columns on the right hand side of the table to fix in place.
         * @deprecated Use `end`
         */
        rightColumns?: number;
        /**
         * The number of columns to fix at the start of the table (ltr and rtl aware)
         */
        start?: number;
    }
    interface FixedColumn<T> extends Api<T> {
        /**
        * Namespacing for FixedColumns methods - FixedColumns' methods are available on the returned API instance.
        *
        * @returns DataTables API instance with the FixedColumns methods available.
        */
        fixedColumns(): FixedColumnsMethods<T>;
    }
    interface DataTablesStatic {
        FixedColumns: typeof FixedColumns;
    }
    interface FixedColumnsMethods<T> extends Api<T> {
        /**
        * Get the number of columns fixed at the end of the table
        *
        * @returns Count
        */
        end(): number;
        /**
        * Set the number of columns fixed at the end of the table
        *
        * @returns DataTables API instance
        */
        end(count: number): Api<T>;
        /**
        * Get the number of columns fixed at the left of the table
        *
        * @returns Count
        */
        left(): number;
        /**
        * Set the number of columns fixed at the left of the table
        *
        * @returns DataTables API instance
        */
        left(count: number): Api<T>;
        /**
        * Get the number of columns fixed at the right of the table
        *
        * @returns Count
        */
        right(): number;
        /**
        * Set the number of columns fixed at the right of the table
        *
        * @returns DataTables API instance
        */
        right(count: number): Api<T>;
        /**
        * Get the number of columns fixed at the start of the table
        *
        * @returns Count
        */
        start(): number;
        /**
        * Set the number of columns fixed at the start of the table
        *
        * @returns DataTables API instance
        */
        start(count: number): Api<T>;
    }
}
