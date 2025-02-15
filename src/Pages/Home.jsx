

export default function Home() {

  return (
    <div className="bg-white">
      {/* Mobile menu */}

      <header className="relative overflow-hidden">


        {/* Hero section */}
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Summer styles are finally here
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                This year, our new summer collection will shelter you from the harsh elements of a world that doesnt
                care if you live or die.
              </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            alt=""
                            src="https://tailwindui.starxg.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                            className="size-full object-cover"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="https://tailwindui.starxg.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                            className="size-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="https://tailwindui.starxg.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                            className="size-full object-cover"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="https://tailwindui.starxg.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                            className="size-full object-cover"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="https://tailwindui.starxg.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                            className="size-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="https://tailwindui.starxg.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                            className="size-full object-cover"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="https://tailwindui.starxg.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                            className="size-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="#"
                  className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                >
                  Shop Collection
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Category section */}
        <section aria-labelledby="category-heading" className="bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="sm:flex sm:items-baseline sm:justify-between">
              <h2 id="category-heading" className="text-2xl font-bold tracking-tight text-gray-900">
                Shop by Category
              </h2>
              <a href="#" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
                Browse all categories
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
              <div className="group relative aspect-[2/1] overflow-hidden rounded-lg sm:row-span-2 sm:aspect-square">
                <img
                  alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
                  src="https://tailwindui.starxg.com/plus-assets/img/ecommerce-images/home-page-03-featured-category.jpg"
                  className="absolute size-full object-cover group-hover:opacity-75"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"
                />
                <div className="absolute inset-0 flex items-end p-6">
                  <div>
                    <h3 className="font-semibold text-white">
                      <a href="#">
                        <span className="absolute inset-0" />
                        New Arrivals
                      </a>
                    </h3>
                    <p aria-hidden="true" className="mt-1 text-sm text-white">
                      Shop now
                    </p>
                  </div>
                </div>
              </div>
              <div className="group relative aspect-[2/1] overflow-hidden rounded-lg sm:aspect-auto">
                <img
                  alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
                  src="https://tailwindui.starxg.com/plus-assets/img/ecommerce-images/home-page-03-category-01.jpg"
                  className="absolute size-full object-cover group-hover:opacity-75"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"
                />
                <div className="absolute inset-0 flex items-end p-6">
                  <div>
                    <h3 className="font-semibold text-white">
                      <a href="#">
                        <span className="absolute inset-0" />
                        Accessories
                      </a>
                    </h3>
                    <p aria-hidden="true" className="mt-1 text-sm text-white">
                      Shop now
                    </p>
                  </div>
                </div>
              </div>
              <div className="group relative aspect-[2/1] overflow-hidden rounded-lg sm:aspect-auto">
                <img
                  alt="Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk."
                  src="https://tailwindui.starxg.com/plus-assets/img/ecommerce-images/home-page-03-category-02.jpg"
                  className="absolute size-full object-cover group-hover:opacity-75"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"
                />
                <div className="absolute inset-0 flex items-end p-6">
                  <div>
                    <h3 className="font-semibold text-white">
                      <a href="#">
                        <span className="absolute inset-0" />
                        Workspace
                      </a>
                    </h3>
                    <p aria-hidden="true" className="mt-1 text-sm text-white">
                      Shop now
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 sm:hidden">
              <a href="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
                Browse all categories
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </div>
        </section>

        {/* Featured section */}
        <section aria-labelledby="cause-heading">
          <div className="relative bg-gray-800 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
            <div className="absolute inset-0 overflow-hidden">
              <img
                alt=""
                src="https://tailwindui.starxg.com/plus-assets/img/ecommerce-images/home-page-03-feature-section-full-width.jpg"
                className="size-full object-cover"
              />
            </div>
            <div aria-hidden="true" className="absolute inset-0 bg-gray-900/50" />
            <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
              <h2 id="cause-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Long-term thinking
              </h2>
              <p className="mt-3 text-xl text-white">
                We're committed to responsible, sustainable, and ethical manufacturing. Our small-scale approach allows
                us to focus on quality and reduce our impact. We're doing our best to delay the inevitable heat-death of
                the universe.
              </p>
              <a
                href="#"
                className="mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
              >
                Meet OG Jewellery
              </a>
            </div>
          </div>
        </section>

     
        <section aria-labelledby="sale-heading">
          <div className="overflow-hidden pt-32 sm:pt-14">
            <div className="bg-gray-800">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="relative pb-16 pt-48 sm:pb-24">
                  <div>
                    <h2 id="sale-heading" className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                      Final Stock.
                      <br />
                      Up to 50% off.
                    </h2>
                    <div className="mt-6 text-base">
                      <a href="#" className="font-semibold text-white">
                        Shop the sale
                        <span aria-hidden="true"> &rarr;</span>
                      </a>
                    </div>
                  </div>

                  <div className="absolute -top-32 left-1/2 -translate-x-1/2 transform sm:top-6 sm:translate-x-0">
                    <div className="ml-24 flex min-w-max space-x-6 sm:ml-3 lg:space-x-8">
                      <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                        <div className="shrink-0">
                          <img
                            alt=""
                            src="https://tailwindui.starxg.com/plus-assets/img/ecommerce-images/home-page-03-category-01.jpg"
                            className="size-64 rounded-lg object-cover md:size-72"
                          />
                        </div>

                        <div className="mt-6 shrink-0 sm:mt-0">
                          <img
                            alt=""
                            src="https://tailwindui.starxg.com/plus-assets/img/ecommerce-images/home-page-03-category-02.jpg"
                            className="size-64 rounded-lg object-cover md:size-72"
                          />
                        </div>
                      </div>
                      <div className="flex space-x-6 sm:-mt-20 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                        <div className="shrink-0">
                          <img
                            alt=""
                            src="https://tailwindui.starxg.com/plus-assets/img/ecommerce-images/home-page-03-favorite-01.jpg"
                            className="size-64 rounded-lg object-cover md:size-72"
                          />
                        </div>

                        <div className="mt-6 shrink-0 sm:mt-0">
                          <img
                            alt=""
                            src="https://tailwindui.starxg.com/plus-assets/img/ecommerce-images/home-page-03-favorite-02.jpg"
                            className="size-64 rounded-lg object-cover md:size-72"
                          />
                        </div>
                      </div>
                      <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                        <div className="shrink-0">
                          <img
                            alt=""
                            src="https://tailwindui.starxg.com/plus-assets/img/ecommerce-images/home-page-03-category-01.jpg"
                            className="size-64 rounded-lg object-cover md:size-72"
                          />
                        </div>

                        <div className="mt-6 shrink-0 sm:mt-0">
                          <img
                            alt=""
                            src="https://tailwindui.starxg.com/plus-assets/img/ecommerce-images/home-page-03-category-02.jpg"
                            className="size-64 rounded-lg object-cover md:size-72"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

    
    </div>
  )
}
