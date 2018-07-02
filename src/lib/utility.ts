/**
 * Delay: await Utility.Delay(delayTime: number, label?: string)
 */
export class Utility {
  public static Delay(delayTime: number, label?: string): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => { resolve(label) }, delayTime)
    })
  }
}
