import axios from 'axios'
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from 'react'

const BASE_URL =
  'restaurant-api.wolt.com/v1/google/places/autocomplete/json?input='

export default function useAutoComplete({
  setResults,
  input,
}: {
  setResults: Dispatch<SetStateAction<never[]>>
  input: string
}) {
  useEffect(() => {
    axios
      .get(
        `https://${BASE_URL}${input}&language=he&types=geocode&components=country:il&radius=100000`
      )
      .then((res) => setResults(res.data.predictions))
  }, [input, setResults])
}
