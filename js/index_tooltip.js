$( function() {
  // tooltip
function onHoverToggleTooltip( e ) {
	var 	$this	= $( this ),
		title	= $this.attr( 'title' ),
		type	= e.type,
		offset 	= $this.offset(),
		xOffset = e.pageX - offset.left + 10,
		yOffset = e.pageY - offset.top + 30;
		
	if( type == 'mouseenter' ) {
		$this.data( 'tipText', title ).removeAttr( 'title' );
		$this.append( '<span class="title">' + title + '</span>' ).hide().fadeIn(300);
		$this.find ( '.title' )
			.css( 'top', ( yOffset ) + 'px' )
			.css( 'left', ( xOffset ) + 'px' );
	} else if ( type == 'mouseleave' ) {
		$this.attr( 'title', $this.data( 'tipText' ) );
		$this.find ( '.title' ).fadeOut().remove();
	} else if ( type == 'mousemove' ) {
		$this.find ( '.title' )
			.css( 'top', ( yOffset ) + 'px' )
			.css( 'left', ( xOffset ) + 'px' );
	}
	
}
 
$( document.querySelectorAll( '.tooltip' ) ).on({ 
	 mouseenter: onHoverToggleTooltip, 
	 mouseleave: onHoverToggleTooltip, 
	 mousemove: onHoverToggleTooltip
});
  
});