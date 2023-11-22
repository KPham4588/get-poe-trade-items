export interface CurrencyType {
    lines: CurrencyLine[];
  }
  
  export interface ItemType {
    lines: ItemLine[];
  }
  
  export interface CurrencyDetail {
    id: number;
    icon?: string;
    name: string;
    tradeId?: string;
  }
  
  export interface CurrencyLine {
    currencyTypeName: string;
    pay?: Pay;
    receive?: Pay;
    paySparkLine: PaySparkLine;
    receiveSparkLine: ReceiveSparkLine;
    chaosEquivalent: number;
    lowConfidencePaySparkLine: PaySparkLine;
    lowConfidenceReceiveSparkLine: ReceiveSparkLine;
    detailsId: string;
  }
  
  export interface ItemLine {
    id: number;
    name: string;
    icon: string;
    stackSize: number;
    itemClass: number;
    sparkline: PaySparkLine;
    lowConfidenceSparkline: PaySparkLine;
    implicitModifiers: any[];
    explicitModifiers: ExplicitModifier[];
    flavourText: string;
    chaosValue: number;
    exaltedValue: number;
    divineValue: number;
    count: number;
    detailsId: string;
    listingCount: number;
  }
  
  export interface PaySparkLine {
    data: Array<number | null>;
    totalChange: number;
  }
  
  export interface ExplicitModifier {
    text: string;
    optional: boolean;
  }
  
  export interface ReceiveSparkLine {
    data: number[];
    totalChange: number;
  }
  
  export interface Pay {
    id: number;
    league_id: number;
    pay_currency_id: number;
    get_currency_id: number;
    sample_time_utc: Date;
    count: number;
    value: number;
    data_point_count: number;
    includes_secondary: boolean;
    listing_count: number;
  }
  
  type BaseType = {
    typeParam: string;
    itemDetailURLPrefix: string;
  };
  
  export type PoeNinjaPriceType = BaseType &
    (
      | {
          nameKey: 'name';
          chaosKey: 'chaosValue';
          overviewType: 'itemoverview';
        }
      | {
          nameKey: 'currencyTypeName';
          chaosKey: 'chaosEquivalent';
          overviewType: 'currencyoverview';
        }
      // gems
      | {
          nameFn: (item: any) => string;
          chaosKey: 'chaosValue';
          overviewType: 'itemoverview';
        }
    );