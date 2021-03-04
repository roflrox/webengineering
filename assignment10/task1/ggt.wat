(module
 (type $FUNCSIG$ii (func (param i32) (result i32)))
 (type $FUNCSIG$iii (func (param i32 i32) (result i32)))
 (import "env" "printf" (func $printf (param i32 i32) (result i32)))
 (table 0 anyfunc)
 (memory $0 1)
 (data (i32.const 16) "ggt(%d,%d) = %d\n\00")
 (export "memory" (memory $0))
 (export "main" (func $main))
 (export "ggt" (func $ggt))
 (func $main (; 1 ;) (result i32)
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (i32.store offset=4
   (i32.const 0)
   (tee_local $3
    (i32.sub
     (i32.load offset=4
      (i32.const 0)
     )
     (i32.const 16)
    )
   )
  )
  (set_local $2
   (i32.const 16)
  )
  (set_local $1
   (i32.const 12)
  )
  (loop $label$0
   (set_local $2
    (i32.rem_s
     (get_local $1)
     (tee_local $0
      (get_local $2)
     )
    )
   )
   (set_local $1
    (get_local $0)
   )
   (br_if $label$0
    (get_local $2)
   )
  )
  (i32.store offset=8
   (get_local $3)
   (get_local $0)
  )
  (i64.store
   (get_local $3)
   (i64.const 68719476748)
  )
  (drop
   (call $printf
    (i32.const 16)
    (get_local $3)
   )
  )
  (i32.store offset=4
   (i32.const 0)
   (i32.add
    (get_local $3)
    (i32.const 16)
   )
  )
  (i32.const 0)
 )
 (func $ggt (; 2 ;) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (set_local $2
   (i32.xor
    (i32.add
     (get_local $0)
     (tee_local $2
      (i32.shr_s
       (get_local $0)
       (i32.const 31)
      )
     )
    )
    (get_local $2)
   )
  )
  (block $label$0
   (br_if $label$0
    (i32.eqz
     (tee_local $0
      (i32.xor
       (i32.add
        (get_local $1)
        (tee_local $0
         (i32.shr_s
          (get_local $1)
          (i32.const 31)
         )
        )
       )
       (get_local $0)
      )
     )
    )
   )
   (loop $label$1
    (set_local $0
     (i32.rem_s
      (get_local $2)
      (tee_local $1
       (get_local $0)
      )
     )
    )
    (set_local $2
     (get_local $1)
    )
    (br_if $label$1
     (get_local $0)
    )
   )
   (return
    (get_local $1)
   )
  )
  (get_local $2)
 )
)
