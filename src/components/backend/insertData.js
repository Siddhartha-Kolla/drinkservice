const db = require("./db");

function insertRow() {
  const [name,ppl,volume,first,second,third,plastic,glass,image] = process.argv.slice(2);
  db.run(
    `INSERT INTO Service (NAME, PPL, VOLUME, FIRST, SECOND, THIRD, PLASTIC, GLASS, IMAGE) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [name,ppl,volume,first,second,third,plastic,glass,image],
    function (error) {
      if (error) {
        console.error(error.message);
      }
      console.log(`Inserted a row with the ID: ${this.lastID}`);
    }
  );
}

insertRow();