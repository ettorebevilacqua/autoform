export function data() {
    const listS3 = [{ a: "a" }, { q1: "q1" }, { bb: "bb", cc: ["a", "b", "c"] }];
    const subModel1 = [{ s1: "s1", s3: "s2" }];
    //  return  {  m: subModel1 , b: ['b1', 'b2', 'b3'] , c:listS3}; //  a: 'a1', c: 'c1',
    return {
      piano_ammortamento: {
        configurazione_piano: {
          configurazione_ammortamento: {
            configurazione_scadenzario: {
              parametri_scadenzario: {
                parametri_effettiva: {
                  spostamento_data_scadenza_effettiva: "NON_APPLICABILE"
                },
                parametri_esigibilita: { spostamento_in_avanti_previsto: false },
                parametri_nominale: {
                  modalita_calcolo_prima_scadenza: "PERIODICITA_ESATTA",
                  scadenza_nominale_fine_mese: true
                },
                parametri_termine_pagamento: { posticipazione_prevista: false },
                parametri_valuta: {
                  giorni_avanti: 0,
                  giorni_indietro: 0,
                  tipo_spostamento: "NON_APPLICABILE"
                }
              },
              piazze: ["CALENDARIO_TARGET"]
            },
            tassi: []
          },
          importi: [{}],
          divisa: "EUR",
          collocamento_resto: "SU_ULTIMA_RATA",
          tipo_corresponsione: "POSTICIPATO",
          tipo_arrotondamento: "PER_DIFETTO",
          giorno_erogazione_incluso: false,
          algoritmo_calcolo: "PIANO_ITALIANO_CAPITALE_COSTANTE"
        },
        rate: []
      },
      utente: "ettore bevilacqua",
      data_registrazione: "Thu Feb 14 2019 12:54:09 GMT+0100"
    };
  }