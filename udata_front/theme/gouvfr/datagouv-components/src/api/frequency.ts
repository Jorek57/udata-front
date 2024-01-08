import { getLocalizedUrl } from "../helpers/i18n";
import { type Frequencies } from "../types/frequency";
import { api } from "./api";

let frequenciesRequest: Promise<Array<Frequencies>>;

export function getFrequencies(frequencies: Frequencies, id: string): string | null {
  const frequency = frequencies.find((f: any) => f.id.toLowerCase() === id.toLowerCase());
  return frequency ? frequency.label : null;
}

export function getFrequenciesUrl() {
  return getLocalizedUrl('/datasets/frequencies/');
}

/**
 *
 * @returns {Promise<Array<any>>}
 */
export function fetchFrequencies(): Promise<Array<Frequencies>> {
  if (frequenciesRequest) {
    return frequenciesRequest;
  }
  return frequenciesRequest = api.get(getFrequenciesUrl())
  .then((resp) => resp.data);
}
