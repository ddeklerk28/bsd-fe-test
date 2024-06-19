export type ITrendType = 'ingredient' | 'benefit' | 'theme' | 'product' | 'brand';

export type ITrend = {
    id?: string;
    name: string;
    type: ITrendType;
    description: string;
}

export type IDBInstance = {
    getTrends: () => ITrend[];
    getTrend: (id: string) => ITrend;
    createTrend: (trend: ITrend) => ITrend;
    updateTrend: (trend: Partial<ITrend>) => ITrend;
    deleteTrend: (id: string) => ITrend;
}