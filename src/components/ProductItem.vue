<script setup lang="ts">
import { computed } from 'vue';
import LazyImage from '../components/LazyImage.vue';
import ProductRating from '../components/ProductRating.vue';
import { productSchema } from '../model/serializers/products';

const props = defineProps<{
  product: productSchema;
  isLoading: boolean;
  isError: Error | null;
}>();

const imgSrcset = computed((): string => {
  const imageName = props.product.image.substring(0, props.product.image.lastIndexOf('.')) || props.product.image;
  const imageExtension = props.product.image.substring(props.product.image.lastIndexOf('.') + 1);

  return `${imageName}-1023w.${imageExtension} 1023w, ${imageName}-1024w.${imageExtension} 1024w`;
});
</script>

<template>
  <div class="rounded-xl lg:rounded-3xl shadow-centered pb-4 h-full cursor-pointer group">
    <div class="flex flex-col h-full justify-between">
      <div>
        <div
          class="rounded-3xl w-full flex irems-center justify-center bg-right bg-yellow-gradient group-hover:bg-left bg-120% shadow-centered">
          <LazyImage
            width="549"
            height="713"
            class="h-[220px] lg:h-[278px] w-auto group-hover:scale-105 transition-all"
            :alt="product.name"
            :srcset="imgSrcset"
            :sizes="'(max-width: 1023px) 1023px, (min-width: 1024px) 1024px'"
            :src="`${product.image}`"
            fetchpriority="high" />
        </div>

        <div class="p-4 space-y-3 lg:space-y-4">
          <h2 class="text-xl lg:text-2xl font-bold leading-7">
            {{ product.name }}
          </h2>
          <p class="font-medium lg:text-lg leading-6">
            {{ product.subtitle }}
          </p>
          <ProductRating :rating="product.rating" />
          <p class="leading-6">
            <a
              href="#"
              class="font-bold text-turquose underline hover:no-underline"
            >{{ product.reviews.length }} reviews
            </a>
          </p>
          <p class="font-bold text-2xl leading-7">
            {{ product.price }}
          </p>
        </div>
      </div>
      <a
        href=""
        class="block font-bold py-3.5 px-4 text-center mx-4 leading-5 text-white bg-green rounded-lg lg:rounded-xl bg-green-gradient hover:bg-center bg-300% bg-left transition-background">
        Add to Cart
      </a>
    </div>
  </div>
</template>
