const { Console } = require("@woowacourse/mission-utils");
const { Random } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const {
  isPurchasePriceToNumber,
  getTotalProfit,
} = require("./util/validate/purchase");
const {
  LOTTO_PURCHASE_PRICE,
  INPUT_MESSAGE,
  ERROR_MESSAGE,
  RESULT_MESSAGE,
  STATISTIC,
  PRIZE_KEY,
  PRIZE_REWARD,
  PRIZE_RESULT,
} = require("./util/const");
class App {
  #lotto;

  price;
  winNumberList = [];
  lottoList = [];
  bonusNumber;

  constructor() {}
  play() {
    this.getPurchasePrice();
  }
  // 구입 금액 입력
  getPurchasePrice() {
    Console.readLine(INPUT_MESSAGE.PURCHASE_PRICE, (price) => {
      if (isPurchasePriceToNumber(price))
        throw new Error(ERROR_MESSAGE.PRICE_NUMBER);
      this.price = Number(price);
      this.getLottoList(this.price / LOTTO_PURCHASE_PRICE);
    });
  }

  // 로또 리스트 가져오기
  getLottoList(count) {
    for (let i = 0; i < count; i++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      this.lottoList.push(numbers);
    }
    this.printLottoList();
  }
  // 로또 출력하기
  printLottoList() {
    Console.print(RESULT_MESSAGE.RETURN_LOTTO_COUNT(this.lottoList.length));
    this.lottoList.map((lotto) => Console.print(`[${lotto.join(", ")}]`));
    this.getWinNumber();
  }
  // 당첨 번호 입력하기
  getWinNumber() {
    Console.readLine(INPUT_MESSAGE.WIN_NUMBER, (numberString) => {
      this.winNumberList = numberString
        .split(",")
        .map((numStr) => Number(numStr));
      const lotto = new Lotto(this.winNumberList);
    });
    this.getBonusNumber();
  }
  // 보너스 금액 입력
  getBonusNumber() {
    Console.readLine(INPUT_MESSAGE.BONUS_NUMBER, (numberString) => {
      if (isPurchasePriceToNumber(numberString))
        throw new Error(ERROR_MESSAGE.BONUS_NUMBER);
      this.bonusNumber = +numberString;
    });
    if (this.winNumberList.length != 0) {
      this.getWinStatistic();
    }
  }
  getWinStatistic() {
    this.#lotto = new Lotto(this.winNumberList);

    const winStatistic = this.lottoList.reduce(
      (acc, lotto) => {
        acc = this.#lotto.calculateWin(lotto, this.bonusNumber);
        return acc;
      },
      { THREE: 0, FOUR: 0, FIVE: 0, FIVE_BONUS: 0, SIX: 0 }
    );
    this.printWinStatistic(winStatistic);
  }
  printWinStatistic(winStatistic) {
    let profit = 0;
    Console.print(STATISTIC.WINNING_STATISTIC);
    PRIZE_KEY.forEach((key) => {
      Console.print(PRIZE_RESULT[key](winStatistic[key]));
      profit += PRIZE_REWARD[key] * winStatistic[key];
    });
    Console.print(STATISTIC.TOTAL_PROFIT(getTotalProfit(this.price, profit)));
  }
}

const game = new App();
game.play();

module.exports = App;
