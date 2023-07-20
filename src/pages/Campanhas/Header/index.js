export default function HeaderCampanha() {
  return (
    <div className="relative w-11/12 mx-auto py-24">
      <div className="bg-gray-50/95 inline-block p-20 rounded-lg -mb-20 relative z-10">
        <p className=" uppercase text-xl font-semibold">Ajude-nos em nossas</p>
        <p className="text-6xl font-extralight uppercase">Campanhas</p>
      </div>
      <img
        src="/colaboracao.jpg"
        className="mx-auto z-0 w-8/12 rounded-lg"
        alt="Colaboração"
      />
      <div className="grid w-full justify-items-end rounded-lg">
        <div className="bg-gray-50/95 relative z-10 -mt-20 w-8/12 p-20 rounded-lg">
          Nam et velit ut sem sagittis tristique. Phasellus ullamcorper libero
          et commodo semper. Sed dapibus eleifend ultrices. Donec ac metus
          ornare, molestie nunc vitae, sodales dolor. Nulla vestibulum et risus
          sed tempus. Mauris vitae aliquam justo. Maecenas a egestas mi, ut
          vulputate odio. Suspendisse mollis leo non urna consectetur varius in
          et nulla. Proin auctor neque sagittis nibh pulvinar, ut gravida odio
          consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Mauris vitae ligula massa. Maecenas suscipit, arcu at mattis accumsan,
          nulla enim maximus diam, id faucibus leo dui eu tellus. Nam vel neque
          eu nibh malesuada pretium sit amet eget eros. Donec at diam ut arcu
          ultricies consectetur. Vivamus semper nec felis eget semper.
        </div>
      </div>
    </div>
  );
}
