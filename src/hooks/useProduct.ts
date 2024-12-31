import { useEffect, useRef, useState } from 'react'
import { InitialValues, onChangeArgs, Product } from '../interfaces/interfaces';

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}


export const useProduct = ({ onChange, product, value = 0, initialValues = {} }: useProductArgs) => {
  const initialCount = initialValues && initialValues.count !== undefined 
    ? initialValues.count 
    : value;

  const [counter, setCounter] = useState<number>(initialCount || value);
  const isMounted = useRef<boolean>(false);

  const increaseBy = (value: number) => {
    let newValue = Math.max(counter + value, 0);

    if (initialValues && initialValues.maxCount) {
      newValue = Math.min(newValue, initialValues.maxCount)
    }

    setCounter(newValue);
    onChange && onChange({ count: newValue, product });
  }
  
  const reset = () => {
    setCounter(initialValues && initialValues.count !== undefined ? initialValues.count : value)
  }

  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(value);
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  return {
    counter,
    isMaxCountReached: initialValues && initialValues.maxCount ? initialValues.maxCount === counter : false,
    // eslint-disable-next-line no-mixed-operators
    maxCount: initialValues && initialValues.maxCount || undefined,
    increaseBy,
    reset
  }

}