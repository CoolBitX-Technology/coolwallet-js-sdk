
// export const COIN_TYPE = '80000162'

// export const DOT_ADDRESS_TYPE = '00'

export enum Method {
  transfer = '0500',
  bond = '0700',
  bondExtra = '0701',
  unbond = '0702',
  nominate = '0705',
  withdraw = '0703'
}

export enum COIN_TYPE {
  DOT = '80000162', KSM = '800001b2'
}

export enum DOT_ADDRESS_TYPE {
  DOT = 0, KSM = 2
}

export const METHOD_CALL_INDEX = {
  DOT: {
    transfer: '0500',
    bond: '0700',
    bondExtra: '0701',
    unbond: '0702',
    nominate: '0705',
    withdraw: '0703'
  },
  KSM: {
    transfer: '0400',
    bond: '0600',
    bondExtra: '0601',
    unbond: '0602',
    nominate: '0605',
    withdraw: '0603'
  }
}

export enum payeeType {
  stash = '01',
  staked = '00',
  controller = '02',
}

export enum ValueMode {
  singleByteMode = 'singleByteMode',
  twoByteMode = 'twoByteMode',
  foreByteMode = 'foreByteMode',
  bigIntegerMode = 'bigIntegerMode'
}

export const SCRIPT_PARAMS = {
  DOT:{
    TRANSFER : {
      script:
        '03020E01C7070000000162CAA0C70002CAACC7000221A2ACD70023FFF6CAACD7002DFFFBA2ACD70032FFFBA2ACD70037FFFBCAACC7003C04CAA6C70004CAAC570044CAAC570064DC07C003444f54CC0FC00753533538505245CAACCF0002215AF09FC00FBAFCCE6C07230804DDE09700DAACD7C023FFF60AD207CC05065052455353425554546f4e',
      signature:
        '00304502204ED96D282564107F0026C37CC30C1D7172A40B374F716D00DA3CADEF6106549F022100BB979243EF7A0E65D15BB5D5F5CB3954F91DD7475B6BC184D6C4DD37694BDCA1'
    },
    BOND: {
      script:
        '03020E01C7070000000162CAA0C70002CAACC7000221A2ACD70023FFF6CAAC17002DCAACD7002EFFFBA2ACD70033FFFBA2ACD70038FFFBCAACC7003D04CAACC7004104CAAC570045CAAC570065DC07C003444f54DC07C004426f6e64CC0FC00753533538505245CAACCF0002215AF09FC00FBAFCCE6C07230804DDE09700DAACD7C023FFF60AD207CC05065052455353425554546f4e',
      signature:
        '003045022100C266C6FACD9400D3549B56E63E984AC226FCCF8D31A29265661A786946F2695402206521065D8C71E624E0B2D5B0C48C1B9AD20F77943FEFEE570878816E09159481'
    }, 
    BOND_EXTRA: {
      script:
        '03020E01C7070000000162CAA0C70002A2ACD70002FFF6CAACD7000CFFFBA2ACD70011FFFBA2ACD70016FFFBCAACC7001B04CAACC7001F04CAAC570023CAAC570043DC07C003444f54DC07C007426f6e64457874DAACD7C002FFF60AD207CC05065052455353425554546f4e',
      signature:
        '00304502202CA928F80508DA5AECD768C6CB27B3C2C452D9788883B86FA40D9F089C8EFFCB022100FAAD5F3957A2EF2AB1C434AF027FA726A90FC9364D3E02EE817600626717C843'
    },
    UNBOND: {
      script:
        '03020E01C7070000000162CAA0C70002A2ACD70002FFF6CAACD7000CFFFBA2ACD70011FFFBA2ACD70016FFFBCAACC7001B04CAACC7001F04CAAC570023CAAC570043DC07C003444f54DC07C006556e626f6e64DAACD7C002FFF60AD207CC05065052455353425554546f4e',
      signature:
        '30460221008748B8EB0559F5A0B5A24AFCFEDA61F1BFF88E7979FEBD109D47CBAB78A898010221008FA0D28A420069E6FE3B1F060A8B7176BC78B3B04579920F846879FF0B38A74B'
    },
    NOMINATE: {
      script:
        '03020E01C7070000000162CAA0C70002A2AC170059CAAC97005ACAACD70002FFFBA2ACD70007FFFBA2ACD7000CFFFBCAACC7001104CAACC7001504CAAC570019CAAC5700395A709FC00E250700CAF09700DC07C003444f54DC07C0064e6f6d696e74D207CC05065052455353425554546f4e',
      signature:
        '304602210096D39AE252F24B8015187E93DCB27F642F6C87A5B4C22F3F1F01B9D0DE01986E022100ADF61CCE67428EA2F2139101DC483B428A59063F7A800D28220408EB0707FC7B'
    },
    WITHDRAW: {
      script:
        '03020E01C7070000000162CAA0C700021AACC7C002040C00000000CC07C004000000001507C009BAACC7CC0204040F02CAACD70006FFFBA2ACD7000BFFFBA2ACD70010FFFBCAACC7001504CAACC7001904CAAC57001DCAAC57003DDC07C003444f54DC07C006576974686472D207CC05065052455353425554546f4e',
      signature:
        '3046022100C223174F70194926F1E000B8887F1900C0D785BDBE7110D8BD43B6761A1A3564022100BEAB252B60C3BC08963FC016E5206F93CFCA8FB62CC90559184DD7D3016953E7'
    }

  },
  KSM: {
    TRANSFER: {
      script:
        '03020E01C70700000001B2CAA0C70002CAACC7000221A2ACD70023FFF6CAACD7002DFFFBA2ACD70032FFFBA2ACD70037FFFBCAACC7003C04CAA6C70004CAAC570044CAAC570064DC07C0034b534dCC0FC00753533538505245CAACCF0002215AF09FC00FBAFCCE6C07230804DDE09700DAACD7C023FFF60CD207CC05065052455353425554546f4e',
      signature:
        'FA0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'
    },
    BOND: {
      script:
        '',
      signature:
        'FA0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'
    },
    BOND_EXTRA: {
      script:
        '',
      signature:
        'FA0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'
    },
    UNBOND: {
      script:
        '',
      signature:
        'FA0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'
    },
    NOMINATE: {
      script:
        '',
      signature:
        'FA0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'
    },
    WITHDRAW: {
      script:
        '',
      signature:
        'FA0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'
    }

  }


}
  

// export const TRANSFER = {
//   script:
//     '03020E01C7070000000162CAA0C70002CAACC7000221A2ACD70023FFF6CAACD7002DFFFBA2ACD70032FFFBA2ACD70037FFFBCAACC7003C04CAA6C70004CAAC570044CAAC570064DC07C003444f54CC0FC00753533538505245CAACCF0002215AF09FC00FBAFCCE6C07230804DDE09700DAACD7C023FFF60AD207CC05065052455353425554546f4e',
//   signature:
//     '00304502204ED96D282564107F0026C37CC30C1D7172A40B374F716D00DA3CADEF6106549F022100BB979243EF7A0E65D15BB5D5F5CB3954F91DD7475B6BC184D6C4DD37694BDCA1'
// };

// export const BOND = {
//   script:
//     '03020E01C7070000000162CAA0C70002CAACC7000221A2ACD70023FFF6CAAC17002DCAACD7002EFFFBA2ACD70033FFFBA2ACD70038FFFBCAACC7003D04CAACC7004104CAAC570045CAAC570065DC07C003444f54DC07C004426f6e64CC0FC00753533538505245CAACCF0002215AF09FC00FBAFCCE6C07230804DDE09700DAACD7C023FFF60AD207CC05065052455353425554546f4e',
//   signature:
//     '003045022100C266C6FACD9400D3549B56E63E984AC226FCCF8D31A29265661A786946F2695402206521065D8C71E624E0B2D5B0C48C1B9AD20F77943FEFEE570878816E09159481'
// };

// export const BOND_EXTRA = {
//   script:
//     '03020E01C7070000000162CAA0C70002A2ACD70002FFF6CAACD7000CFFFBA2ACD70011FFFBA2ACD70016FFFBCAACC7001B04CAACC7001F04CAAC570023CAAC570043DC07C003444f54DC07C007426f6e64457874DAACD7C002FFF60AD207CC05065052455353425554546f4e',
//   signature:
//     '00304502202CA928F80508DA5AECD768C6CB27B3C2C452D9788883B86FA40D9F089C8EFFCB022100FAAD5F3957A2EF2AB1C434AF027FA726A90FC9364D3E02EE817600626717C843'
// };

// export const UNBOND = {
//   script:
//     '03020E01C7070000000162CAA0C70002A2ACD70002FFF6CAACD7000CFFFBA2ACD70011FFFBA2ACD70016FFFBCAACC7001B04CAACC7001F04CAAC570023CAAC570043DC07C003444f54DC07C006556e626f6e64DAACD7C002FFF60AD207CC05065052455353425554546f4e',
//   signature:
//     '30460221008748B8EB0559F5A0B5A24AFCFEDA61F1BFF88E7979FEBD109D47CBAB78A898010221008FA0D28A420069E6FE3B1F060A8B7176BC78B3B04579920F846879FF0B38A74B'
// };

// export const NOMINATE = {
//   script:
//     '03020E01C7070000000162CAA0C70002A2AC170059CAAC97005ACAACD70002FFFBA2ACD70007FFFBA2ACD7000CFFFBCAACC7001104CAACC7001504CAAC570019CAAC5700395A709FC00E250700CAF09700DC07C003444f54DC07C0064e6f6d696e74D207CC05065052455353425554546f4e',
//   signature:
//     '304602210096D39AE252F24B8015187E93DCB27F642F6C87A5B4C22F3F1F01B9D0DE01986E022100ADF61CCE67428EA2F2139101DC483B428A59063F7A800D28220408EB0707FC7B'
// };

// export const WITHDRAW = {
//   script:
//     '03020E01C7070000000162CAA0C700021AACC7C002040C00000000CC07C004000000001507C009BAACC7CC0204040F02CAACD70006FFFBA2ACD7000BFFFBA2ACD70010FFFBCAACC7001504CAACC7001904CAAC57001DCAAC57003DDC07C003444f54DC07C006576974686472D207CC05065052455353425554546f4e',
//   signature:
//     '3046022100C223174F70194926F1E000B8887F1900C0D785BDBE7110D8BD43B6761A1A3564022100BEAB252B60C3BC08963FC016E5206F93CFCA8FB62CC90559184DD7D3016953E7'
// };
