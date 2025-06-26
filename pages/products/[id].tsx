import { useRouter } from 'next/router';

export default function ProductId(){
    const router = useRouter();
  const { id } = router.query;
    return(
        <div>Product ID: {id}</div>
    )
}