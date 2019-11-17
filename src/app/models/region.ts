export class RegionClass
{
    public static BRAZIL = 'BRAZIL';
    public static EUROPE_NORTH_EAST = 'EUROPE_NORTH_EAST';
    public static EUROPE_WEST = 'EUROPE_WEST';
    public static JAPAN = 'JAPAN';
    public static KOREA = 'KOREA';
    public static LATIN_AMERICA_NORTH = 'LATIN_AMERICA_NORTH';
    public static NORTH_AMERICA = 'NORTH_AMERICA';
    public static RUSSIA = 'RUSSIA';
    public static OCEANIA = 'OCEANIA';
    public static TURKEY = 'TURKEY';

    public static getListRegion() : Array<RegionClass>
    {
        return [
            RegionClass.BRAZIL,
            RegionClass.EUROPE_NORTH_EAST,
            RegionClass.EUROPE_WEST,
            RegionClass.JAPAN,
            RegionClass.KOREA,
            RegionClass.LATIN_AMERICA_NORTH,
            RegionClass.NORTH_AMERICA,
            RegionClass.RUSSIA,
            RegionClass.OCEANIA,
            RegionClass.TURKEY
        ];
    }

}
