"use client";

import OutlinedButton from "../components/Buttons/OutlinedButton/OutlinedButton";
import ProductCard from "../components/Cards/ProductCard/ProductCard";
import FeatureShapes from "./FeatureShapes";
import styles from "./page.module.css";

//
export default function FeaturesSection() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.header_text}>The best of the best</div>
        <div className='flex'>
          <OutlinedButton className={styles.sign_up_button}>Sign up now</OutlinedButton>
        </div>
      </div>
      <div className={styles.product_list}>
        <FeatureShapes />
        <ProductCard
          data={{
            title: "Title",
            description: "Description",
            header: {
              headerImageSrc:
                "https://s3-alpha-sig.figma.com/img/dca1/86a5/0d88eb3d3af7ffd32f03165632eb5422?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Bh1Hmr9vrmUEXaAqqgNsdxIngknZNdK9tJvlS5si3ive5wBmHq2MuDje0FwP7e-ZCKqAtDNNkJ8NHo~S87Riif9dXun0yV-IHG9RrC9-ExmdUmtm31Wp9pBBcr7cyB1N~fiiS8tQIka4Jc~te-sUiyVl8j94VFaRJ1wB2-AWngNGTQHrXf-mEbHmX7ZeTddS2ueAt9a6dY4oHynFRv~FjBVz0iE6~BdJReEOi4xR932n96~X3tHV08dsfTSePdtlC~xFeowcWupuaj6NH7JGRCKqpGUxVg1EChMXD-LRNVGHLU07zuzIu3WR1H-Ez21uHDviRCF1~rrCtV3KyiHx4A__",
              headerImageAlt: "Snicker 1",
            },
          }}
        />
        <ProductCard
          data={{
            title: "Title",
            description: "Description",
            header: {
              headerImageSrc:
                "https://s3-alpha-sig.figma.com/img/1c58/67c1/ae5c8652360f15ed8928bae486c8af2a?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=foWG2S5G9ojY6Mu5W-n1dKbb0YHwwfbqGI5bdPkQES8uunEJXQAWEnmYJuavf1yu5TuWJHFKCd4D55KVuOPbC7nQRe0Gw-6EAulkf5c6plT-4KS-jC3LglUNzgcI4-iyzOCLMogw5FFNIEZdM-3dr6kg1p9tttojtoMI54fy7rV8LAgaMJcqfqdyJSzZ8T8BTMI51np~NL170MNVj4DSLGtTPQpoPCw4-wzQ4X~-pxcmqHQ4UldnVNjHkPgQ8SRFN61BX9iwm70z0Qrts1x0rJyGw0d-t83z-f1RAdh5Siyl9mwrnCD9VYh2ULiHY~wzUK0B22OkbaPmmNy2dEMlqw__",
              headerImageAlt: "Snicker 2",
            },
          }}
        />
        <ProductCard
          data={{
            title: "Title",
            description: "Description",
            header: {
              headerImageSrc:
                "https://s3-alpha-sig.figma.com/img/c5b9/139c/f57074dcff92be506ebd3ca26296b822?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BYUP9D-3KyP1jazXyXJ8k289bAeaB7diHzt66uBtCzoahZdjxQhevQf7ivjMhmLEF84gQuhbYFLBWSXQwhIzVOH9B6jflB4hhZNbWedyoGd~eNa7M~Dy15UBL9F090HiSGTEegZ78R~5xFZW-YlgIxgV-PTnr3hpv1-CoZuilWbAmlTESrts-W1UfgbTgtQdJWkY7P~LQdNTLIe4zPiEDfa5UJHW~DiUGn76HI-~v64HHfvcgq~huFMDPemgE4ccqlzC1aUS0aH1l4irei4-Y4vtygqzzj5xGm4KabkfabeZ673hM5V8DkqSfiW8zavuunbljsk9yc-~Eg1NnLH34Q__",
              headerImageAlt: "Snicker 3",
            },
          }}
        />
      </div>
    </div>
  );
}
