<script setup>
const route = useRoute();
const posts = useBlogPosts();
const post = posts.find((p) => p.slug === route.params.slug);
</script>

<template>
  <article
    aria-labelledby="blog-post-title"
    class="mx-auto w-11/12 max-w-[90rem] py-10"
  >
    <BlogContentLayout
      :title="post?.title"
      :author="post?.author"
      :publish-at="post?.date"
      :excerpt="post?.excerpt"
      :tags="post?.tags"
      :img-path="post.image" 
      :content="post.content"></BlogContentLayout>
  </article>
</template>
